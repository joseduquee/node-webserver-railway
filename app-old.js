
const http = require('http');

http.createServer( (req, resp) => {

    // resp.writeHead(201, { 'Content-Type': 'application/json' });
    // resp.setHeader('Content-Disposition',  'attachment; filename=lista.csv');
    // resp.writeHead(201, { 'Content-Type': 'application/csv' });

    // resp.write( 'id; nombre\n' );
    // resp.write( '1; Fernando\n' );
    // resp.write( '2; Maria\n' );
    // resp.write( '3; Juan\n' );
    // resp.write( '4; Pedro\n' );
    resp.write('Hola Mundo');
    resp.end();
})
.listen( 8080 );

console.log('Listening port', 8080);