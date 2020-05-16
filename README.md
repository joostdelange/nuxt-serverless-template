# Nuxt Serverless template
A very complete Nuxt.js project template, which can be distributed as a Serverless function

## Configure
1. Rename *secrets.example.json* to *secrets.json*
2. Set the `SERVICE_NAME` variable to preference
  - If you want to setup a custom domain already, fill `DOMAIN` and `CERTIFICATE` too
  - After creating the certificate at your provider, run the command `sls create_domain` to setup the custom domain + certificate
3. Rename `.env.example` to something like `.env.development` or just `.env`
4. Provide values for the environment variables to preference

## Run
- Run `npm run dev` to start a local development server
- Run `npm run build` to create a production ready build
- If you have setup your serverless correctly, you can run `npm run deploy` to deploy the serverless function

## Develop
- Head over to https://nuxtjs.org/guide for a full documentation about nuxt
- If you want to know more about Serverless, go to https://www.serverless.com/framework/docs/ for their documentation
