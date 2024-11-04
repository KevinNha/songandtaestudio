/// <reference path="./.sst/platform/config.d.ts" />

import * as aws from '@pulumi/aws';

export default $config({
  app(input) {
    return {
      name: 'songandtaestudio',
      removal: input?.stage === 'prod' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          profile:
            input.stage === 'prod'
              ? 'songandtaestudio-prod'
              : 'songandtaestudio-dev',
          region: 'us-west-2',
        },
      },
    };
  },

  async run() {
    const imageDistributionId = 's3ImageDistributionOriginId';

    // Bucket for photos
    const photosBucket = new sst.aws.Bucket(
      $app.stage === 'prod'
        ? 'songandtaestudio-photos'
        : 'songandtaestudio-photos-dev',
      {
        transform: {
          policy: (args) => {
            args.policy = sst.aws.iamEdit(args.policy, (policy) => {
              policy.Statement.push({
                Effect: 'Allow',
                Action: 's3:GetObject',
                Principal: {
                  Service: 'cloudfront.amazonaws.com',
                },
                Resource: $interpolate`arn:aws:s3:::${args.bucket}/*`,
                Condition: {
                  StringEquals: {
                    'AWS:SourceArn': $interpolate`${distribution.arn}`,
                  },
                },
              });
            });
          },
        },
      }
    );

    // CloudFront cache policy
    const cloudFrontCachePolicy = new aws.cloudfront.CachePolicy(
      's3OriginCachePolicy',
      {
        minTtl: $app.stage === 'prod' ? 31536000 : 86400,
        defaultTtl: $app.stage === 'prod' ? 31536000 : 86400,
        maxTtl: $app.stage === 'prod' ? 31536000 : 86400,
        parametersInCacheKeyAndForwardedToOrigin: {
          cookiesConfig: {
            cookieBehavior: 'none',
          },
          headersConfig: {
            headerBehavior: 'whitelist',
            headers: {
              items: ['Content-Disposition'],
            },
          },
          queryStringsConfig: {
            queryStringBehavior: 'none',
          },
          enableAcceptEncodingBrotli: true,
          enableAcceptEncodingGzip: true,
        },
      }
    );

    const oac = new aws.cloudfront.OriginAccessControl(
      'PhotosOAC',
      {
        name: 'photos-oac',
        originAccessControlOriginType: 's3',
        signingBehavior: 'always',
        signingProtocol: 'sigv4',
      },
      { dependsOn: [photosBucket] }
    );

    const distribution = new aws.cloudfront.Distribution('MyDistribution', {
      enabled: true,
      defaultCacheBehavior: {
        cachePolicyId: cloudFrontCachePolicy.id,
        viewerProtocolPolicy: 'redirect-to-https',
        allowedMethods: ['GET', 'HEAD'],
        cachedMethods: ['GET', 'HEAD'],
        targetOriginId: imageDistributionId,
      },
      origins: [
        {
          originId: imageDistributionId,
          domainName: photosBucket.domain,
          originAccessControlId: $interpolate`${oac.id}`,
        },
      ],
      restrictions: {
        geoRestriction: {
          restrictionType: 'none',
        },
      },
      viewerCertificate: {
        cloudfrontDefaultCertificate: true,
      },
    });

    const distributionLinkable = new sst.Linkable('distributionLinkable', {
      properties: { cloudfrontDomain: distribution.domainName },
    });

    new sst.aws.Nextjs('MyWeb', {
      link: [photosBucket, distributionLinkable],
      domain: {
        name:
          $app.stage == 'prod'
            ? 'songandtaestudio.com'
            : 'dev.songandtaestudio.com',
        aliases:
          $app.stage == 'prod'
            ? ['www.songandtaestudio.com']
            : ['www.dev.songandtaestudio.com'],
      },
    });
  },
});
