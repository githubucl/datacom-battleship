import React, { useState } from "react";
import {
  initialGameBoardState,
  shipLayout,
  initialShipsHealthState,
  shipTypes,
} from "./GameHelper";
import GameBoard from "./GameBoard";
import GamePanel from "./GamePanel";

import "./Game.scss";
const Game = (): JSX.Element => {
  const [boardState, setBoardState] = useState(
    initialGameBoardState(shipLayout, 10)
  );

  const [shipsHealthState, setShipsHealthState] = useState(
    initialShipsHealthState(shipTypes)
  );

  const onGridClick = (clickedPosition: string) => {
    setBoardState((boardState) => {
      return boardState.map((gridState) => {
        //When user clicks on a grid we want to do 2 things
        if (gridState.position === clickedPosition) {
          //First imcrement damage for that particular ship on the grid (if there is one)
          setShipsHealthState((shipHealthPrev) => {
            return shipHealthPrev.map((shipHealth) => {
              if (shipHealth.ship === gridState.ship) {
                return { ...shipHealth, damage: shipHealth.damage + 1 };
              }
              return shipHealth;
            });
          });
          //Second set fired state to true for that grid
          return {
            ...gridState,
            fired: true,
          };
        }
        return gridState;
      });
    });
  };

  return (
    <div className="p-sm-5 container">
      <div className="row">
        <div className="col-md-8 col-12 order-md-2">
          <GameBoard onGridClick={onGridClick} boardState={boardState} />
        </div>
        <div className="col-md-4 col-12 ">
          <GamePanel shipsHealthState={shipsHealthState} />
        </div>
      </div>
    </div>
  );
};

export default Game;
