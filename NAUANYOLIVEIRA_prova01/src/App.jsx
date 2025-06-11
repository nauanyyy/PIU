import React from "react";
import Contador from "./componentes/Contador";
import ListaCarros from "./componentes/ListaCarros";
import "./App.css";

/*O sistema chama a função app logo quando é executado, por isso aparece o front-end e as funções funcionam*/
function App() {
  return (
    <div className="app">
      <Contador />
      <ListaCarros />
    </div>
  );
}

export default App;