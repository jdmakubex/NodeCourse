
/**
 * Forma tradicional de  hacer una función
 */
// function sumar( a, b){
//     return a+b;
// }

/**
 * Forma de flecha
 */

// const sumar = (a,b) => {
//     return a +b;
// }

/**
 * Cuando la función de flecha solo retorna una linea, se pueden omitir las llaves y el return
 *  y hacer que todo sea una sola linea
*/

const sumar = (a,b) => a +b;


console.log( sumar ( 5, 10 ) )