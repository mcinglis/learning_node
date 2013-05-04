
var schedule = function() {
    setTimeout( function() {
        console.log( 'Hello World!' );
        schedule();
    }, 1000 );
};

schedule();

