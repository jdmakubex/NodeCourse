console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
},300);

setTimeout( () => {
    console.log('Segundo Timeout');
},0);

setTimeout( () => {
    console.log('Tercer Timeout');
},0);

console.log('Fin de programa');

/**
 * Debemos instalar de forma global nodemon:
 *  npm install -g nodemon    
 */