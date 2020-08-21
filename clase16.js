let signo = prompt('¿Cuál es tu signo?');

console.log(signo);

signo = signo.toLowerCase();
signo = signo.charAt(0).toUpperCase() + signo.substr(1, signo.length - 1);

switch(signo){
    case 'Aries':
        console.log('No permita que sus pensamientos solo giren en torno a lo material. Tendría que valorar más el cariño que da y el afecto que recibe de la gente que lo quiere.');
        break;
    case 'Tauro':
        console.log('Tenga en cuenta las situaciones y no sea tan cruel con los demás. Comprenda que no hay que juzgar a todos de la misma forma. Sea más permisivo.');
        break;
    case 'Geminis':
        console.log('Prepárese, ya que transitará un día muy complicado. No se involucre en discusiones inútiles y espere a que pase la tormenta para poder dar su opinión.');
        break;
    case 'Cancer':
        console.log('Entienda que debe conservar la calma y la objetividad a la hora de decidir. Procure dejar a un costado los compromisos afectivos y sea práctico.');
        break;
    case 'Leo':
        console.log('En estos momentos, le será conveniente que mantenga el equilibrio ante las situaciones que enfrente, ya que las emociones estarán desordenadas.');
        break;
    case 'Virgo':
        console.log('Intente organizar mejor sus actividades diarias. Sepa que el desorden y la falta de objetividad podrían ser los obstáculos en el éxito de sus proyectos.');
        break;
    case 'Libra':
        console.log('Momento para cumplir con todos los compromisos, si es necesario delegue sus responsabilidades. Así, se sentirá mucho más aliviado en esta jornada.');
        break;
    case 'Escorpio':
        console.log('Momento óptimo para alejar de su vida todas las tradiciones viejas. Sepa que es la causa que no le permite avanzar en muchos de los planes a futuro.');
        break;
    case 'Sagitario':
        console.log('Tiempo óptimo para ordenar los intereses personales y animarse a ponerlos en práctica. Intente vencer todos los miedos y las dependencias que tiene por naturaleza.');
        break;
    case 'Capricornio':
        console.log('Debe entender que la prudencia será la herramienta necesaria para afrontar cualquier decisión difícil que no puede seguir postergando en el tiempo.');
        break;
    case 'Acuario':
        console.log('Entienda que cualquier exceso lo podría llevar por mal camino y le costará volver. Procure vigilar su temperamento y escuche las opiniones de los demás.');
        break;
    case 'Piscis':
        console.log('Sepa que atravesará una etapa donde tendrá que pensar en soledad y poner en orden las ideas tomando una determinación importante para su vida.');
        break;
    default: console.log('No es un signo zodiacal válido');
}