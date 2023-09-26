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
    const empleado = empleados.find( e=> e.id === id)
    if (empleado) {
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
    
}

getEmpleado(1, (err, empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('El empleado Existe!')
    console.log(empleado);
})

