import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slider,
  Chip,
} from "@mui/material";
import { getDataFromPokemon } from "../../service";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  const fecthDetailPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  //haremos la funcion q abrira el modal (dialog)

  const handleOpenDialog = async () => {
    if (!abrir) {
      await fecthDetailPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">
        Ver Detalle
      </Button>

      <Dialog
        open={abrir}
        fullWidth={"md"}
        maxWidth={"md"}
        onClose={handleOpenDialog}
      >
        <DialogContent>
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2>{props.nombre}</h2>
              <Grid container>
                <Grid item>
                  <h4>habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip label={abilitie.ability.name} />
                  ))}
                  <h4>Datos</h4>
                    <Chip
                     label={`${pokemonData.height/10}m`}/>
                     <Chip
                     label={`${pokemonData.weight /10}Kg`}/>


                </Grid>
              </Grid>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
