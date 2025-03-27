import { Resource } from 'sst';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const allowedPages = {
  home: 'home',
  about: 'about',
  galleryMom: 'gallery/mom',
  galleryDad: 'gallery/dad',
};

const sortImagePath = (imagePaths: string[]) => {
  return imagePaths.sort((a: string, b: string) => {
    const getName = (url: string) => parseFloat(url.split('/').pop() || '0');
    return getName(a) - getName(b);
  });
};

export async function getImages(path: string) {
  if (!(path in allowedPages)) {
    return new Response('Invalid page', { status: 400 });
  }

  const command = new ListObjectsV2Command({
    Bucket: Resource.bucketNameLinkable.name,
    Prefix: allowedPages[path as keyof typeof allowedPages],
  });
  const data = await s3Client.send(command);

  const objectNames = data.Contents
    ? sortImagePath(
        data.Contents.splice(1).map((item) => item.Key as string)
      ).map(
        (item) => `${Resource.distributionLinkable.cloudfrontDomain}/${item}`
      )
    : [];

  return new Response(JSON.stringify(objectNames), { status: 200 });
}
