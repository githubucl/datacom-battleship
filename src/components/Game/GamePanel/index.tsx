import React from "react";
import ScoreBoard from "./ScoreBoard";
import ShipHealth from "./ShipHealth";
import { TShipWithHealth } from "../../../types";
import "./GamePanel.scss";

type TGamePanelProp = {
  shipsHealthState: TShipWithHealth[];
};
const GamePanel = ({ shipsHealthState }: TGamePanelProp): JSX.Element => {
  return (
    <div className="GamePanel d-flex flex-column">
      <ScoreBoard />
      <ShipHealth shipsHealthState={shipsHealthState} />
    </div>
  );
};

export default GamePanel;
