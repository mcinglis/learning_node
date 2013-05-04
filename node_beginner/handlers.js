
var fs         = require( 'fs' );
var formidable = require( 'formidable' );

// Won't work on Windows.
var FILEPATH = '/tmp/test.png';

exports.start = function( req, res ) {
    res.writeHead( 200, { 'content-type': 'text/html' } );
    res.end(
        '<!doctype html>' +
        '<meta charset="utf-8">' +
        '<form action="/upload" enctype="multipart/form-data" method=post>' +
            '<input type=file name=upload>' +
            '<input type=submit value=Upload>' +
        '</form>'
    );
};

exports.upload = function( req, res ) {
    var form = new formidable.IncomingForm();
    form.parse( req, function( err, fields, files ) {
        fs.unlink( FILEPATH, function() {
            fs.rename( files.upload.path, FILEPATH );
        });
        res.writeHead( 200, { 'content-type': 'text/html' } );
        res.end( '<p>Received image:</p><img src="/show">' );
    });
};

exports.show = function( req, res ) {
    fs.readFile( FILEPATH, 'binary', function( err, file ) {
        if ( err ) {
            res.writeHead( 500, { 'content-type': 'text/plain' } );
            res.end( err + '\n' );
        } else {
            res.writeHead( 200, { 'content-type': 'image/png' } );
            res.end( file, 'binary' );
        }
    });
};

