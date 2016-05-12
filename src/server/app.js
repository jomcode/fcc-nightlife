const path = require('path');
const feathers = require('feathers');
const serveStatic = require('feathers').static;
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compression');
// const favicon = require('serve-favicon');
const rest = require('feathers-rest');
const primus = require('feathers-primus');

const middleware = require('./middleware');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname)));

app.use(compress())
  .options('*', cors())
  .use(cors())
  // .use(favicon())
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(primus({ transformer: 'websockets' }))
  .configure(services)
  .configure(middleware);

module.exports = app;
