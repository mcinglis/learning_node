
var buffer = new Buffer( 100 );

for ( var i = 0; i < 99; i += 1 ) {
    buffer[ i ] = i;
}

console.log( buffer.toString( 'base64' ) );

