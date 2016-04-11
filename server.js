var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
    reply('Hello world!');
  }
});

server.route({
  path: '/test',
  method: 'GET',
  handler: function (request, reply) {
    reply('This is a test!');
  }
});

server.ext('onRequest', function (request, reply) {
    request.setUrl('/test');
    return reply.continue();
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
