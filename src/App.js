import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import freeCodeCampLogo from "./imagnes/logoRact.png";
// hooks
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    console.log("Click");
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecapm-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numeroDeclicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reinicar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
