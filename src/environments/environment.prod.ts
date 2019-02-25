export const environment = {
    production: true,
    s3: {
        REGION: 'eu-west-1',
        BUCKET: 'notes-app-2-api-prod-attachmentsbucket-eknctn3g4w1o'
    },
    apiGateway: {
        REGION: 'eu-west-1',
        URL: 'https://td9jqkyjm3.execute-api.eu-west-1.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'eu-west-1',
        USER_POOL_ID: 'eu-west-1_z0E9Ec1hM',
        APP_CLIENT_ID: '33plpje325n32a8p0tk122koa9',
        IDENTITY_POOL_ID: 'eu-west-1:f2f2e2c5-cb28-4b6e-8084-9f38c7aa033c'
    }
};
