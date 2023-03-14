import React from "react";
import GameBoard from "./GameBoard";
import GamePanel from "./GamePanel";

import "./Game.scss";
const Game = (): JSX.Element => {
  return (
    <div className="p-sm-5 d-flex flex-column flex-sm-row-reverse justify-content-center align-items-center">
      <GameBoard />
      <GamePanel />
    </div>
  );
};

export default Game;
