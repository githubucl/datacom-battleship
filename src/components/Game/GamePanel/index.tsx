import React from "react";
import ScoreBoard from "./ScoreBoard";
import ShipHealth from "./ShipHealth";
import "./GamePanel.scss";
const GamePanel = () => {
  return (
    <div className="GamePanel">
      <ScoreBoard />
      <ShipHealth />
    </div>
  );
};

export default GamePanel;
