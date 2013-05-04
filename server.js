
var http = require( 'http' );
var url  = require( 'url' );

exports.start = function( route, handle ) {
    http.createServer(function( req, res ) {
        route({
            handle: handle,
            pathname: url.parse( req.url ).pathname,
            response: res,
            request: req
        });
    }).listen( 8888 );
    console.log( 'Server has started.' );
};

