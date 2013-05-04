
exports.route = function( options ) {
    var handle = options.handle,
        pathname = options.pathname,
        res = options.response,
        data = options.data;
    console.log( 'routing ' + pathname );
    if ( typeof handle[ pathname ] === 'function' ) {
        handle[ pathname ]( res, data );
    } else {
        console.log( 'No request handler found for ' + pathname );
        res.writeHead( 404, { 'Content-Type': 'text/plain' } );
        res.write( '404 not found' );
        res.end();
    }
};

