
exports.route = function( options ) {
    var handle = options.handle;
    var pathname = options.pathname;
    var res = options.response;
    var req = options.request;
    console.log( 'routing ' + pathname );
    if ( typeof handle[ pathname ] === 'function' ) {
        handle[ pathname ]( res, req );
    } else {
        console.log( 'No request handler found for ' + pathname );
        res.writeHead( 404, { 'Content-Type': 'text/plain' } );
        res.write( '404 not found' );
        res.end();
    }
};

