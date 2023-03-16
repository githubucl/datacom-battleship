import React, { useState } from "react";
import { initialGameBoardState, shipLayout } from "./GameBoardHelper";
import Grid from "./Grid";
//style
import "./GameBoard.scss";
const GameBoard = () => {
  const [boardState, setBoardState] = useState(
    initialGameBoardState(shipLayout, 10)
  );
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
  return (
    <div className="GameBoard d-flex flex-wrap">
      {boardState.map(({ position, ship, fired }) => (
        <Grid
          key={position}
          position={position}
          ship={ship}
          fired={fired}
          onGridClick={onGridClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
