
var http = require( 'http' ),
    url  = require( 'url' );

exports.start = function( route, handle ) {
    var onRequest = function( req, res ) {
        var pathname = url.parse( req.url ).pathname;
        console.log( 'Request for ' + pathname + ' received.' );
        route( handle, pathname, res );
    };
    http.createServer( onRequest ).listen( 8888 );
    console.log( 'Server has started.' );
};

