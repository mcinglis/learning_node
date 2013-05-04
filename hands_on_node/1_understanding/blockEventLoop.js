
var open = false;

setTimeout(function() { open = true; }, 1000);

while (!open) {}

console.log( 'opened!' );

