import React from "react";
import Ship from "./Ship";
import { SHIPTYPE } from "../../../../types";

const ShipHealth = () => {
  return (
    <div className="d-flex ">
      <Ship shipType={SHIPTYPE.BATTBLESHIP} health={3} />
    </div>
  );
};

export default ShipHealth;
