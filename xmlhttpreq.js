//Direcciones de mi servidor, osea la api de star wars
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

//Creo una función que al ser ejecutada inicie mi petición request
function traerDatos(){
    //Instancio un objeto de tipo request en el cual almacenaremos
    //las respuesta o información de la petición
    var objetoRequest = new XMLHttpRequest; 
        
    //Para hacer un request a un servidor usamos los metodos .open() y .send()

    //Para el metodo open se requieren tres parametros
    //1. Definir si queremos obtener datos 'GET' o enviar datos 'POST'
    //2. Definir la ruta del archivo o la api con quien nos queremos comunicar
    //3. Definir si el procesos sera asincrono o sincrono, en este caso asincrono = true
    objetoRequest.open('GET', lukeUrl, true);

    //El metodo send() envia la solicitud a nuestro servidor o archivo externo
    //send() para get y send(string) para POST
    objetoRequest.send();
    //Si el objeto ha tenido un cambio se ejecuta una funcion este es el callback, 
    //esta funcion hace hasta 4 verificaciones para tratar de obtener comunicacion con el servidor
    objetoRequest.onreadystatechange = function () {
        //Esta es una comprobacion, la primera .readyState es si logramos o no el request al servidor = 4
        //Si logramos ejecutarlo
        //la segunda es el estado .status si todo esta OK sera igual a 200
        if(this.readyState == 4 && this.status == 200){
            //Los datos se retornan como un archivo Json en el atributo responseText
            //es necesario cambiarlos a un objeto para que sea mas facil manipularlos
            var personaje = JSON.parse(this.responseText);
            console.log(typeof(personaje))
            console.log(`Hola yo soy, ${personaje.name}`)
        }
    }
}
//Invocamos nuestra función de request
traerDatos()