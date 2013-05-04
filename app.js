
var server   = require( './server' );
var handlers = require( './handlers' );

server.start({ port: 8888, handlers: {
    '/':        handlers.start,
    '/start':   handlers.start,
    '/upload':  handlers.upload,
    '/show':    handlers.show
}});

