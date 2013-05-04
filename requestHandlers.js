
var querystring = require( 'querystring' );

exports.start = function( res ) {
    console.log( 'start handler called' );
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.write(
        '<!doctype html>' +
        '<meta charset="utf-8">' +
        '<form action="/upload" method=post>' +
            '<textarea name=text rows=20 cols=60></textarea>' +
            '<input type=submit value=Submit />' +
        '</form>'
    );
    res.end();
};

exports.upload = function( res, data ) {
    console.log( 'upload handler called' );
    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    res.write( 'You sent text: ' + querystring.parse(data).text );
    res.end();
};

