var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// Array
var personas = [sacha, alan, martin, dario, vicky, paula];

const esAlta = ({altura}) => altura > 1.8;

// FILTRAR
var personasAltas = personas.filter(esAlta);    // Forma recomendada

var personasAltas = personas.filter(function (persona){ // Es lo mismo
    return persona.altura > 1.8;
});

// PASAR ALTURA A CMS
const pasarAlturaACms = persona => {
    persona.altura *= 100;

    return persona; // Afecta al objeto directamente
}

const pasarAlturaACmsNuevoObjeto = persona => ({        // Crea y devuelve un nuevo objeto
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);    // cms: Centímetros