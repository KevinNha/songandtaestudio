import { Resource } from 'sst';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const allowedPages = {
  home: 'home',
  about: 'about',
  galleryMom: 'gallery/mom',
  galleryDad: 'gallery/dad',
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
    ? data.Contents.splice(1).map(
        (item) =>
          `${Resource.distributionLinkable.cloudfrontDomain}/${item.Key}`
      )
    : [];

  console.log(objectNames);

  return new Response(JSON.stringify(objectNames), { status: 200 });
}
