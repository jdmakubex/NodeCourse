const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

//Función que busca en el arreglo de empleados.
const getEmpleado = (id, callback) => {
    /**
     * El resolve es un callback que se va a llamar cuando se tiene el resultado correctamente
     * El Reject devuelve el error, en caso de que el resultado no exista
     */
    return new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;
        //Así se implementa un if ternario
        ( empleado )
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = (id,callback) => {
    return new Promise((resolve,reject) => {
        const salario = salarios.find(s => s.id === id )?.salario;
        ( salario )
        ? resolve( salario )
        : reject (`No existe salario para el empleado con ID: ${id}`);
    });
}

const id = 10;

// Esta parte solo se utilizó para verifica las funciones 
// getEmpleado(id)
//     //.then Nos ayuda mostrar el resultado que viene de la
//     .then(empleado => console.log( empleado))
//     //.catch Nos ayuda a que el programa no colapse en caso de que el resultado venga cavío o con algun error. 
//     .catch( err => console.log(err) );

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch( err => console.log(err));


// //Esta es una implementación de callbacks no optima para mantener - Nunca implementar así
// getEmpleado(id)
//     .then( empleado => {
//         getSalario (id)
//             .then(salario=>{
//                 console.log('El empleado: ',empleado, 'tiene un salario de ', salario )
//             })
//             .catch( err => console.log(err) );
//     })
//     .catch( err => console.log(err) );

/**
 * implementación de promesas en Cadena
 */

//Por ahora se maneja una estrategia de una variable extra
let nombre; 

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log ('El empleado', nombre , 'Tiene un salario de :', salario))
    .catch( err => console.log( err ));