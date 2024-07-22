import React from "react";
import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import freeCodeCampLogo from "./imagnes/logoRact.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
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
          <Contador numeroDeclicks={this.state.numClicks} />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Boton
            texto="Reinicar"
            esBotonDeClick={false}
            manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
