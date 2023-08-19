// paso 1 importar usestate de React
import { useState } from "react";

//realizar un componente
import React from "react";

const Formulario = () => {
    const[nombre,setNombre] =useState("")
    const[apellido,setApellido] = useState("")

 const handleInputName = (e)=>{
    setNombre(e.target.value)
 }
 const handleInpuApellido = (e)=>{
    setApellido(e.target.value)
 }

  return (
    <div>
      <form action="">
        <h3>Formulario de Registro </h3>
        <h3>Nombre :{nombre}</h3>
        <h3>Apellido :{apellido} :</h3>
        <h3>Email :</h3>
        {/* crear 2 inpus  paswor y otro email  */}
        <p>
          <input onChange={handleInputName} type="text" placeholder="ingresa tu nombre" />
        </p>
        <p>
          <input onChange={handleInpuApellido} type="text" placeholder="ingresa tu apellido" />
        </p>
      </form>
    </div>
  );
};

export default Formulario;
