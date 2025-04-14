import { Resource } from 'sst';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
const dbclient = new DynamoDBClient();

export type Review = {
  id: { N: string };
  name: { S: string };
  review: { S: string };
  createdAt: { N: string };
};

export const getReviews = async () => {
  const result = await dbclient.send(
    new ScanCommand({
      TableName: Resource.ReviewsTable.name,
    })
  );

  const items = result.Items as Review[];

  const sorted = items.sort((a, b) => {
    return Number(b.createdAt.N) - Number(a.createdAt.N);
  });

  return sorted;
};
