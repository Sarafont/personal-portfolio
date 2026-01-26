import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <>
      <Home/>
    </>
  )
}

export default App

//O path="*" é para todos os qcaminhos/rotas que não foram definidos vão por default para o componente dentro do element (no caso NotFound)