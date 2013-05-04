
var exec = require( 'child_process' ).exec;

exports.start = function( res ) {
    console.log( 'start handler called' );
    exec(
        'find /',
        { timeout: 10000, maxBuffer: 20000*1024 },
        function( error, stdout ) {
            res.writeHead( 200, { 'Content-Type': 'text/plain' } );
            res.write( stdout );
            res.end();
        }
    );
};

exports.upload = function( res ) {
    console.log( 'upload handler called' );
    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    res.write( 'Hello Upload' );
    res.end();
};

