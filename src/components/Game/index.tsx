import React from "react";
import GameBoard from "./GameBoard";
import GamePanel from "./GamePanel";

import "./Game.scss";
const Game = (): JSX.Element => {
  return (
    <div className="p-sm-5 container ">
      <div className="row">
        <div className="col-sm-8 col-12 order-sm-2">
          <GameBoard />
        </div>
        <div className="col-sm-4 col-12 ">
          <GamePanel />
        </div>
      </div>
    </div>
  );
};

export default Game;
