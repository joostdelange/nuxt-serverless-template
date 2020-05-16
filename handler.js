const sls = require('serverless-http');
const { Nuxt } = require('nuxt');
const config = require('./nuxt.config.js');
const nuxt = new Nuxt({ ...config, dev: false });

module.exports.server = (req, res) => {
  return nuxt.ready().then(() => nuxt.server.app(req, res));
};

module.exports.index = sls(this.server, {
  binary: [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/xml',
    'font/eot',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml',
  ],
});
