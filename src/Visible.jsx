import { useState } from 'react'

const Visible = () => {
 const[visible,setVisible]=useState(true);

 const Visibilidad =()=>{
    setVisible(!visible)
    console.log("tipo",visible)

 }

  return (
    <div>
        <h1>Visible</h1>
        <button onClick={Visibilidad}>
           mostrar
        </button>
        {visible  && <p>1315646545</p>}
    </div>
  )
}

export default Visible