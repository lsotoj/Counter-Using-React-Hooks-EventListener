import React, { useState } from "react";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const clic = () => {
    setCount(++count);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className="contenedor-principal">
        <Contador numero={count} />

        <Boton tipo="Clic" esClic={true} accion={clic} />
        
        <Boton tipo="Reset" esClic={false} accion={reset} />
      </div>
    </div>
  );
}

export default App;
