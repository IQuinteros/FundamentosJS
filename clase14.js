
var ignacio = {
    nombre: 'Ignacio',
    apellido: 'Quinteros',
    edad: 19,
    peso: 50
}

console.log(`Al inicio del año ${ignacio.nombre} pesa ${ignacio.peso} kg`);

const aumentarPeso = (persona, incremento) => persona.peso += incremento;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const DIAS_DEL_AÑO = 364;
const INCREMENTO_PESO = 0.3;

const META = ignacio.peso - 3;

let dias = 0;

while(ignacio.peso > META){
    // debugger PARA PARAR EL CÓDIGO
    if(comeMucho()){
       // Aumentar Peso 
       aumentarPeso(ignacio, INCREMENTO_PESO);
    }
    if(realizaDeporte()){
       aumentarPeso(ignacio, -INCREMENTO_PESO);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${ignacio.nombre} logre pesar ${ignacio.peso.toFixed(1)} kg`);
