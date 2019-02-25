// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    s3: {
        REGION: 'eu-west-1',
        BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1nxszv88wvqrh'
    },
    apiGateway: {
        REGION: 'eu-west-1',
        URL: 'https://er6gdzlh9b.execute-api.eu-west-1.amazonaws.com/dev'
    },
    cognito: {
        REGION: 'eu-west-1',
        USER_POOL_ID: 'eu-west-1_CbBT8voV3',
        APP_CLIENT_ID: '3vtc41vd44juac3o371gagma6j',
        IDENTITY_POOL_ID: 'eu-west-1:54e62131-75f7-4d7c-8929-55f9d097c7d0'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
