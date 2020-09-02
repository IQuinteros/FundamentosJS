const ignacio = {
  nombre: 'Ignacio',
  apellido: 'Quinteros',
  edad: 19
}

const cumpleanos = persona => persona.edad++; // Modifica a la persona

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})

