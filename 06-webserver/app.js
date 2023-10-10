const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');




/**
 * Para usar handlebars tuvimos que instalar el paquete con: npm install hbs  
 * ahora lo importamos 
 */


/**
 * Para servir contenido estático se implementan middlewarew's
 */
app.use( express.static( 'public' ) );

// app.get('/',  (req, res) => {
//   res.send('Home page');
// });

app.get('/',  (req, res) => {
  //De esta forma renderizamos el html de una vista (view)
  res.render('home',{
        nombre: 'Juan de Dios',
        titulo: 'Curso de Node',
  }); 
});


app.get('/hola-mundo',  (req, res) => {
    res.send('Hi World on the route');
});

app.get('/generic',  (req, res) => {
    //res.sendFile(__dirname+'/public/generic.html'); //Así mostramos un archivo HTML
    res.render('generic',{
        nombre: 'Juan de Dios',
        titulo: 'Curso de Node',
    })
});

app.get('/elements',  (req, res) => {
    //res.sendFile(__dirname+'/public/elements.html');
    res.render('elements',{
        nombre: 'Juan de Dios',
        titulo: 'Curso de Node',
    })
});

//Uso de comodin | Se requiere usar paths abosulutos, por lo que se le agregar __dirname +
app.get('*',  (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})