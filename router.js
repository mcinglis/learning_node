
exports.route = function( handle, pathname, res ) {
    console.log( 'routing ' + pathname );
    if ( typeof handle[ pathname ] === 'function' ) {
        handle[ pathname ]( res );
    } else {
        console.log( 'No request handler found for ' + pathname );
        res.writeHead( 404, { 'Content-Type': 'text/plain' } );
        res.write( '404 not found' );
        res.end();
    }
};

