const Hapi = require('hapi');
const server = new Hapi.Server({
	host: 'localhost',
	port: 8000
})
const Inert = require('inert');

server.route({
	method: 'GET',
	path: '/{param*}',
        handler: function (request, h) {
		directory: {
			path: '.',
			redirectToSlash: true,
			index: true
		}
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});
