
/**
 * Los callbacks son funciones que se mandan como argumento a otra función
 * y  se ejecutan en cierto momento del tiempo
 */

// //Este setTimeOut ejecuta una función en un segundo
// setTimeout(function(){
//     console.log('Hola mundo')
// },1000); 

// //Este setTimeOut ejecuta una función en un segundo
// setTimeout(()=>{ //Ejemplo Con función de flecha
//     console.log('Hola mundo')
// },1000); 

const getUsuarioByID= (id, callback) => {
    //Creamos un objeto
    const user ={
        id, //En ES6 es lo mismo que poner: id=id,
        nombre: 'Juan de Dios',
    }

    setTimeout( () => {
        callback(user)
    },1500) //Ejecutalo un segundo y medio después 
}


//Las acciones no se ejecutarán en el función, si no despues de obtener la información
//que retorna de la función 
getUsuarioByID(10, (usuario)=> {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});