import React from 'react'
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Pokemon from '../pages/pokemon/Pokemon'
import EjemploGit from '../EjemploGit';

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='pokemon' element={<Pokemon/>}/>
    <Route path='git' element={<EjemploGit/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router