import React from "react";
import "./Ship.scss";
import { SHIPTYPE } from "../../../../../types";
type TShipProp = {
  shipType: SHIPTYPE;
  health: number;
};
const Ship = ({ shipType, health }: TShipProp) => {
  return <div>Ship</div>;
};

export default Ship;
