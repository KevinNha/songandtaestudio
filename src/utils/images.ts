import { Resource } from 'sst';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client();

enum allowedPages {
  home = 'home',
  gallery = 'gallery',
}

export async function getImages(path: string) {
  if (!(path in allowedPages)) {
    return new Response('Invalid page', { status: 400 });
  }

  const command = new ListObjectsV2Command({
    Bucket: Resource.bucketNameLinkable.name,
    Prefix: path,
  });
  const data = await s3Client.send(command);

  const objectNames = data.Contents
    ? data.Contents.splice(1).map(
        (item) =>
          `${Resource.distributionLinkable.cloudfrontDomain}/${item.Key}`
      )
    : [];

  return new Response(JSON.stringify(objectNames), { status: 200 });
}
