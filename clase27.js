

console.log('a');
setTimeout((() => console.log('b')), 0);    // B se ejecutará después.
// Esta función queda en la cola de tareas. Es otra cola. JS
// Continuará ejecutando el resto del programa principal, hasta el final, y ahí
// Hará tareas de la cola de tareas.
console.log('c');

setTimeout(() => console.log('d'), 2000);

for(let i = 0; i < 1000; i++){
    console.log('NO VOY A BLOQUEAR EL EVENT LOOP');
}