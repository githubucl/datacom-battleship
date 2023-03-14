import React from "react";
import { initialGameBoardState, shipLayout } from "./GameBoardHelper";
const GameBoard = () => {
  console.log(initialGameBoardState(shipLayout, 10));
  return <div>GameBoard</div>;
};

export default GameBoard;
