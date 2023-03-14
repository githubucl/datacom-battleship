import React, { useState } from "react";
import { initialGameBoardState, shipLayout } from "./GameBoardHelper";
import Grid from "./Grid";
//style
import "./GameBoard.scss";
const GameBoard = () => {
  const [boardState, setBoardState] = useState(
    initialGameBoardState(shipLayout, 10)
  );

  return (
    <div className="GameBoard ">
      {boardState.map(({ position, ship, fired }) => (
        <Grid
          key={position.join("")}
          position={position}
          ship={ship}
          fired={fired}
        />
      ))}
    </div>
  );
};

export default GameBoard;
