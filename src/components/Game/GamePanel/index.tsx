import React from "react";
import ScoreBoard from "./ScoreBoard";
import ShipHealth from "./ShipHealth";
import { TShipWithHealth } from "../../../types";
import "./GamePanel.scss";

type TGamePanelProp = {
  shipHealthState: TShipWithHealth[];
};
const GamePanel = ({ shipHealthState }: TGamePanelProp): JSX.Element => {
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
