function diasEntreFechas(fecha1, fecha2){
  const UN_DIA = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2); // Número en milisegundos

  return Math.floor(diferencia / UN_DIA);
}

const hoy = new Date(); // Fecha actual por defecto
const nacimiento = new Date(2001, 2, 2); // Mes comienza en cero


