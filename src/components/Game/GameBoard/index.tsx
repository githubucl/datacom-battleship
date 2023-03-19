import React from "react";

import Grid from "./Grid";
import { TGridInfo } from "../../../types";

//style
import "./GameBoard.scss";

type TGameBoard = {
  onGridClick: (clickedPosition: string) => void;
  boardState: TGridInfo[];
};
const GameBoard = ({ onGridClick, boardState }: TGameBoard) => {
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
