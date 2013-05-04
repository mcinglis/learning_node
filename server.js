
var http = require( 'http' );
var url  = require( 'url' );

exports.start = function( options ) {
    var port = options.port;
    var handlers = options.handlers;

    var server = http.createServer(function( req, res ) {
        var pathname = url.parse( req.url ).pathname;
        var handler = handlers[ pathname ];
        if ( typeof handler === 'function' ) {
            handler( req, res );
        } else {
            res.writeHead( 404, { 'content-type': 'text/plain' } );
            res.end( '404 not found' );
        }
    });

    server.listen( port, function() {
        console.log( 'Server listening on port ' + port + '...' );
    });
};

