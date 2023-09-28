/**
 * Cuando se pone Asing en una función, la transforma para que regrese una promesa
 */

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

const getInfoUsuario = async(id) =>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado : ${ empleado } es de ${salario}`;
    }catch (error){
        //Con el throw llamas el reject de la función asincrona. Esto nos sirve para enviar el error.
        throw error;
    }
}

const id=10;

getInfoUsuario(id)
    .then( msg => {
        console.log('TODO BIEN!')
        console.log(msg)
    })
    .catch(err =>{
        console.log('TODO MAL!')
        console.log(err)
    });

