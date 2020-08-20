var nombre = 'Ignacio';

function imprimirNombreMayusculas(n){
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreMayusculas(nombre);

// obtener una variable del documento:
window.nombre;  // Es Ignacio. Es como decir "this.nombre"