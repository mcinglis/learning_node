var events = require( 'events' );
var util   = require( 'util' );

var MyClass = function( option1, option2 ) {
    this.option1 = option1;
    this.option2 = option2;
};

util.inherits( MyClass, events.EventEmitter );

MyClass.prototype.someMethod = function() {
    this.emit( 'custom event', 'some arguments' );
};

// Client can listen to custom events like this:

var myInstance = new MyClass( 1, 2 );
myInstance.on( 'custom event', function() {
    console.log( 'got a custom event!' );
});

