
var buffer = new Buffer( 100 );

for ( var i = 0; i < 99; i += 1 ) {
    buffer[ i ] = i;
}

var copy = new Buffer( 20 );
buffer.copy( copy, 0, 40, 60 );

console.log( copy.toString( 'base64' ) );

console.log( 'modifying buffer' );

buffer[ 45 ] = 69;

console.log( copy.toString( 'base64' ) );
