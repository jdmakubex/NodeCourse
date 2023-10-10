const express = require('express')
const app = express()
const port = 8080;

//TODO: require hbs
app.set('view engine', 'hbs');

/**
 * Para servir contenido estático se implementan middlewarew's
 */
app.use( express.static( 'public' ) );

// app.get('/',  (req, res) => {
//   res.send('Home page');
// });

app.get('/',  (req, res) => {
  res.render('home');
});


app.get('/hola-mundo',  (req, res) => {
    res.send('Hi World on the route');
});

app.get('/generic',  (req, res) => {
    res.sendFile(__dirname+'/public/generic.html');
});

app.get('/elements',  (req, res) => {
    res.sendFile(__dirname+'/public/elements.html');
});

//Uso de comodin | Se requiere usar paths abosulutos, por lo que se le agregar __dirname +
app.get('*',  (req, res) => {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})