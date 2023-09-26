/**
 * Var, declara una variable en un ámbito global y no siempre es lo que se requiere.
 * let se usa cuando se que el valor va a cambiar, y si declaras con let la misma variable en un scope diferente, cambia el valor
 * 
 * var casi ya no se usa, porque permite errores como por ejemplo que dentro de un scope, la variable se use antes de ser declarada.
 * 
 * Se recomienda declararlas como const, porque son mas lijeras.
 */
const nombre = 'Wolverine';

if (true){
    const nombre= 'Magneto'
    //console.log(nombre)
}

console.log(nombre);