const { resolve } = require('path');
const { existsSync } = require('fs');
const env = process.env.NODE_ENV;
const envPath = resolve(process.cwd(), `.env.${env}`);
const defaultEnvPath = resolve(process.cwd(), '.env');

require('dotenv').config({
  path: existsSync(envPath) ? envPath : defaultEnvPath,
});
