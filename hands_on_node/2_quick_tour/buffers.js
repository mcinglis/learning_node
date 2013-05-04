
// JavaScript isn't very good at handling binary data, so Node adds a native
// buffer implementation. It's the standard way in Node to transport data.

var buf;

buf = new Buffer( 'Hello World!' );

// accepted encodings: ascii, utf8, base64
buf = new Buffer( '8b76fde713ce', 'base64' );

// empty buffer
buf = new Buffer( 1024 );

// Set byte 20 to 56.
buf[ 20 ] = 56;

var str = buf.toString();

str = buf.toString( 'base64' );

buf = new Buffer( 'this is the string in my buffer' );
var slice = buf.slice( 10, 20 );
// or,
var targetStart = 0, sourceStart = 10, sourceEnd = 20;
buf.copy( slice, targetStart, sourceStart, sourceEnd );

