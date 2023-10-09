
const http = require ('http');

http.createServer((req, res)=>{
    //console.log(req)

    //res.writeHeader(200,{'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; file-name=lista.csv');
    // res.writeHead(200,{'Content-Type': 'application/csv'});

    res.write('Hola Mundo');
    
    res.end();

})
.listen( 8080 )

console.log('Escuchado el puerto', 8080);