/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'songandtaestudio',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			providers: {
				aws: {
					profile: input.stage === 'production' ? 'songandtaestudio-prod' : 'songandtaestudio-dev',
					region: 'us-west-2'
				}
			}
		};
	},
	async run() {
		new sst.aws.SvelteKit('MyWeb');
	}
});
