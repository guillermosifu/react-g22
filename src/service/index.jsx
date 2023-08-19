//este archivo sera el lugra donde almacenarmos toda nuestras apis y sus funciones
// tipos de importacion

// es un buena practica dentro react / contryeamos uno generica
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
//PODEMOS CREAR UN FUNCION GENERICA LA CUAL SE ENCARGUE DE HACER UNA PETICION
// COMO PARAMETRO VA RECIBIR LA URL QUE PUDE SER LA PRINCIPAL QUE DE LA INFORMACION
// url sera el parametro que reciba la url de l api 
//url = base_url  url esta vacio cuando llamamos la funcion no le pasemos el valor por defecto sera 
//volver esta funcion generica / declarar otra api en una variable 

export const getDataFromPokemon = async (url = BASE_URL) => {
    try{
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
       return data;
    }catch(error){
        console.log(error.message);  
    }
};

