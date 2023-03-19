import React from "react";
import ScoreBoard from "./ScoreBoard";
import ShipHealth from "./ShipHealth";
import "./GamePanel.scss";
const GamePanel = () => {
  return (
    <div className="GamePanel">
      <div className="">
        <ScoreBoard />
      </div>
      <div className="">
        <ShipHealth />
      </div>
    </div>
  );
};

export default GamePanel;
