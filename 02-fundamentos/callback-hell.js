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
    const empleado = empleados.find( e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
    
}

//Función que busca en el arreglo de salarios
const getSalario = (id, callback) => {
    //Agregamos el signo ? para pegunar prevenir si existe o no el salario buscado
    const salario = salarios.find(s => s.id === id )?.salario
    if (salario) {
        callback(null,salario)
    }else{
        callback(`No existe salario para el empleado con ID: ${id}`)
    }
}

const id = 3;

//Ejecuta la primera función
getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    // Ejecuta la segunda función
    getSalario(id,(err, salario) => {

        if ( err ){
            return console.log(err);
        }
        console.log('El empleado: ', empleado, 'tiene un salario de:', salario)
    })
    
})

