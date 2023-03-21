import React from "react";
import Ship from "./Ship";

import { TShipWithHealth } from "../../../../types";
type TShipHealth = {
  shipsHealthState: TShipWithHealth[];
};
const ShipHealth = ({ shipsHealthState }: TShipHealth) => {
  return (
    <div className="ShipHealth row flex-grow-1 ">
      <div className="row row-cols-1 d-flex flex-wrap align-content-around">
        {shipsHealthState.map(({ ship, health, damage }) => {
          return <Ship ship={ship} health={health} damage={damage} />;
        })}
      </div>
    </div>
  );
};

export default ShipHealth;
