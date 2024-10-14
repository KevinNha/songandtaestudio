/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'songandtaestudio',
			removal: input?.stage === 'prod' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					profile: input.stage === 'prod' ? 'songandtaestudio-prod' : 'songandtaestudio-dev',
					region: 'us-west-2'
				}
			}
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
			domain: {
				name: $app.stage == 'prod' ? 'songandtaestudio.com' : 'dev.songandtaestudio.com',
				aliases:
					$app.stage == 'prod' ? ['www.songandtaestudio.com'] : ['www.dev.songandtaestudio.com']
			}
		});
  },
});
