const app = require('./app');
const host = app.get('host');
const port = app.get('port');

const server = app.listen(port);

server.on('listening', () =>
  console.log(`application listening on ${host}:${port}`)
);
