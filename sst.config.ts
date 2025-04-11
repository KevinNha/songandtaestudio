/// <reference path="./.sst/platform/config.d.ts" />

import * as aws from '@pulumi/aws';

export default $config({
  app(input) {
    return {
      name: 'songandtaestudio',
      home: 'aws',
      providers: {
        aws: {
          profile: 'songandtaestudio-dev',
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

    // SES
    const ses = new sst.aws.Email(
      $app.stage === 'prod' ? 'contact-us-email' : 'contact-us-email-dev',
      {
        sender: 'songandtaestudio.com',
      }
    );

    // CloudFront cache policy
    const cloudFrontCachePolicy = new aws.cloudfront.CachePolicy(
      $app.stage === 'prod' ? 's3OriginCachePolicy' : 's3OriginCachePolicy-dev',
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

    const distribution = new aws.cloudfront.Distribution(
      $app.stage === 'prod' ? 'PhotosDistribution' : 'PhotosDistribution-dev',
      {
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
            originAccessControlId:
              $app.stage === 'prod' ? 'E1JCO6QLFG86T6' : 'EFW3LST4U4BOS',
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
      }
    );

    const distributionLinkable = new sst.Linkable('distributionLinkable', {
      properties: { cloudfrontDomain: distribution.domainName },
    });

    const bucketNameLinkable = new sst.Linkable('bucketNameLinkable', {
      properties: { name: photosBucket.name },
    });

    const sesSenderLinkable = new sst.Linkable('sesSenderLinkable', {
      properties: { email: ses.sender },
    });

    new sst.aws.Nextjs('MyWeb', {
      link: [bucketNameLinkable, distributionLinkable, sesSenderLinkable],
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
      permissions: [
        {
          actions: ['s3:ListBucket'],
          resources: [photosBucket.arn],
        },
        {
          actions: ['ses:SendEmail'],
          resources: ['*'],
        },
      ],
      environment: {
        SES_DESTINATION:
          $app.stage === 'prod'
            ? 'songjjeongkim@gmail.com'
            : 'songandtaestudio@gmail.com',
      },
    });
  },

  console: {
    autodeploy: {
      runner: {
        engine: 'codebuild',
        architecture: 'x86_64',
        compute: 'small',
        timeout: '1 hour',
      },
    },
  },
});
