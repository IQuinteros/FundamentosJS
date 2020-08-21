
var ignacio = {
    nombre: 'Ignacio',
    apellido: 'Quinteros',
    edad: 19,
    peso: 50
}

console.log(`Al inicio del año ${ignacio.nombre} pesa ${ignacio.peso} kg`);

const aumentarPeso = (persona, incremento) => persona.peso += incremento;

const DIAS_DEL_AÑO = 364;
const INCREMENTO_PESO = 0.2;

for (let i = 0; i < DIAS_DEL_AÑO; i++) {
    let random = Math.random();

    if(random < 0.25){
        // Aumenta de peso
        aumentarPeso(ignacio, INCREMENTO_PESO);
    }else if(random < 0.5){
        // Adelgazar
        aumentarPeso(ignacio, -INCREMENTO_PESO);
    }
}

console.log(`Al final del año ${ignacio.nombre} pesa ${ignacio.peso.toFixed(1)} kg`);
