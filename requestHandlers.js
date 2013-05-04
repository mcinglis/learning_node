
var querystring = require( 'querystring' ),
    fs          = require( 'fs' ),
    formidable  = require( 'formidable' );

exports.start = function( res ) {
    console.log( 'start handler called' );
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.write(
        '<!doctype html>' +
        '<meta charset="utf-8">' +
        '<form action="/upload" enctype="multipart/form-data" method=post>' +
            '<input type=file name=upload>' +
            '<input type=submit value=Upload>' +
        '</form>'
    );
    res.end();
};

exports.upload = function( res, req ) {
    console.log( 'upload handler called' );
    var form = new formidable.IncomingForm();
    console.log( 'about to parse form' );
    form.parse( req, function( err, fields, files ) {
        fs.rename( files.upload.path, '/tmp/test.png', function( renameErr ) {
            if ( renameErr ) {
                fs.unlink( '/tmp/test.png' );
                fs.rename( files.upload.path, '/tmp/test.png' );
            }
        });
        res.writeHead( 200, { 'content-type': 'text/html' } );
        res.write( 'received image:<br>' );
        res.write( '<img src="/show">' );
        res.end();
        console.log( 'parsing done' );
    });
};

exports.show = function( res ) {
    console.log( 'show handler called' );
    fs.readFile( '/tmp/test.png', 'binary', function( err, file ) {
        if ( err ) {
            res.writeHead( 500, { 'Content-Type': 'text/plain' } );
            res.write( err + '\n' );
            res.end();
        } else {
            res.writeHead( 200, { 'Content-Type': 'image/png' } );
            res.write( file, 'binary' );
            res.end();
        }
    });
};

