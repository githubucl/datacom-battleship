import React from "react";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
};

export default App;
