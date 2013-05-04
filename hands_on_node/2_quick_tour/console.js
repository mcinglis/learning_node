
console.log({ 1: true, 2: false });

console.log(
    'Number: %d, string: %s, object as JSON: %j',
    42, 'Hello', { a: 3, b: 'test' }
);

console.warn( 'This is written to stderr.' );

// Prints a stack trace
console.trace();

console.log( 'But it keeps going!' );

