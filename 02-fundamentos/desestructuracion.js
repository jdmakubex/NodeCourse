

const deadpool = {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    //edad: 50,
    getNombre(){
        return `${ this.nombre } ${ this.apellido } ${ this.poder}`
    }
}

console.log( deadpool.getNombre()); 

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

/**
 * En vez de hacer las 3 lineas de código anteriores, mejor se hace una desestructuración:
 * Esta es la forma en que se hace una desestructuración:
 */

// const { nombre,apellido, poder, edad = 0} = deadpool;
// console.log(nombre, apellido, poder, edad);

//En este ejemplo la desestruración pasa desde los argumentos
function imprimeHeroe ({ nombre,apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman','Batman'];

/**
 * Desestruración en arreglos
 */

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3 ] = heroes;


console.log(h3)


