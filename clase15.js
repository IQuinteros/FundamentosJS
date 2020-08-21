
let contador = 0;

let llueve = () => Math.random() < 0.25;

do{
    contador++;
}while(!llueve());

console.log(`Fuí a ver si llovía ${contador} ${contador == 1? 'vez' : 'veces'}`);