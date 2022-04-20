import React from "react";
import "../hojas-de-estilo/boton.css";

function Boton({ tipo, esClic, accion }) {
  return (
    <button className={ esClic ? "boton-clic" : "boton-reset"} onClick={accion }>
      {tipo}
    </button>
  );
}

export default Boton;
