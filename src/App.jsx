import { useState } from "react";
import DarkMode from "./DarkMode";
import App2 from "./login/App2";
import "./App.css";
import EjemploGit from "./EjemploGit";
import Visible from "./Visible";
import Contador from "./Contador";
import Formulario from "./Formulario";
import Pokemon from "./pages/pokemon/Pokemon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <App2/> */}
    {/* <Visible/> */}
    {/* <DarkMode/>  */}
    {/* <Contador/> */}
    <Pokemon/>
    


  
    </>
  );
}

export default App;
