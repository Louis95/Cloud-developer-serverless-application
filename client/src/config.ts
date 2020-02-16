// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'w5tormob87'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'serverless-todo-app.auth0.com',            // Auth0 domain
  clientId: 'uI3y1v25i35yGx9IEJG1X7UirHWoEzUK',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
