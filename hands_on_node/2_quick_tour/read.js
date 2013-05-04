var fs = require( 'fs' );

fs.open( '/var/log/boot.log', 'r', function( err, fd ) {
    if ( err ) { throw err; }
    var buf = new Buffer( 1024 );
    fs.read( fd, buf, 0, buf.length, 100, function( err, readBytes ) {
        if ( err ) { throw err; }
        console.log( 'just read ' + readBytes + ' bytes' );
        if ( readBytes > 0 ) {
            console.log( buf.slice( 0, readBytes ) );
        }
    });
});

