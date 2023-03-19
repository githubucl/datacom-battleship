import React, { useState } from "react";
import {
  initialGameBoardState,
  shipLayout,
  initialShipHealthState,
  shipTypes,
} from "./GameHelper";
import GameBoard from "./GameBoard";
import GamePanel from "./GamePanel";

import "./Game.scss";
const Game = (): JSX.Element => {
  const [boardState, setBoardState] = useState(
    initialGameBoardState(shipLayout, 10)
  );

  const [shipHealthState, setShipHealthState] = useState(
    initialShipHealthState(shipTypes)
  );
  console.log("shipHealthState", shipHealthState);
  const onGridClick = (clickedPosition: string) => {
    setBoardState((boardState) => {
      return boardState.map((gridState) => {
        if (gridState.position === clickedPosition) {
          return {
            ...gridState,
            fired: true,
          };
          //TODO:minus 1 live for that ship
        }
        return gridState;
      });
    });
  };
  console.log("boardState", boardState);
  return (
    <div className="p-sm-5 container ">
      <div className="row">
        <div className="col-sm-8 col-12 order-sm-2">
          <GameBoard onGridClick={onGridClick} boardState={boardState} />
        </div>
        <div className="col-sm-4 col-12 ">
          <GamePanel />
        </div>
      </div>
    </div>
  );
};

export default Game;
