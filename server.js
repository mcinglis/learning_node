
var http = require( 'http' ),
    url  = require( 'url' );

exports.start = function( route, handle ) {
    http.createServer(function( req, res ) {
        var data = '';
        var pathname = url.parse( req.url ).pathname;
        console.log( 'Request for ' + pathname + ' received.' );
        req.setEncoding( 'utf8' );
        req.addListener( 'data', function( chunk ) {
            data += chunk;
            console.log( 'received data chunk: ' + chunk );
        });
        req.addListener( 'end', function() {
            route({
                handle: handle,
                pathname: pathname,
                response: res,
                data: data
            });
        });
    }).listen( 8888 );
    console.log( 'Server has started.' );
};

