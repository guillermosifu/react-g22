import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
import PokemonDetail from "../../componentes/PokemonDetail";
// en react  existe una funcion llamada useeffect la cual se ejecuta cuando la pagina
//esta iniciando vamos usar useeffect si queremos ejecutar algo al inico de la plaicacion

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  //vamos a crear una variable donde se creara toda la lista de ppokemons
  const [pokemons, setPokemons] = useState([]);
  //debmos crear una funcionla cual se encargue de ejecutar a getDatafromPkemon
  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    //como ya recuperamo la lista de pokemones hay que usa la funcion setPkemon para poder guardalo
    console.log("lista de pokemons", listPokemones.results);
    setPokemons(listPokemones.results);
  };
  //la estructura es la siguiente
  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Container>
      <h1>Pokedex testeando</h1>
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            //aca el codigo visulmente la lista
            <Grid item md={4}>
              <Card>
                <CardMedia
                component="img"
                className="img-pokemon"
                image={`${imgUrl}${index +1 }.svg`}/>
                <CardContent>
                  <h3> {pokemon.name}</h3>
                  <h3>Numero : </h3>
                </CardContent>
                <PokemonDetail/>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Pokemon;
