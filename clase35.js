

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
 
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = { crossDomain: true };


function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

        $
        .get(url, opts, (data)=>{
            resolve(data);  // Resolver promesa
        })
        .fail(() => reject(id));  //  Mandar error a la promesa
    })
}

async function obtenerPersonajes(){
  var ids = [1,2,3,4,5,6,7];

  var promesas = ids.map(id => obtenerPersonaje(id));

  try{
    var personajes = await Promise.all(promesas); 
    console.table(personajes);
  }
  catch(id){
    console.log('Sucedió un error. No se pudo obtener el personaje');
  }

}

obtenerPersonajes();
