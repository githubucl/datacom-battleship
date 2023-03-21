import React from "react";
import "./Ship.scss";
import { ShipImage } from "../../GamePanelHelper";
import { TShipWithHealth } from "../../../../../types";

const Ship = ({ ship, health, damage }: TShipWithHealth) => {
  return (
    <div className="Ship pt-5 col-6 col-md-12">
      <div className="row row-cols-2">
        <div className="col-6 ">
          <img className="Ship__sideImage" src={ShipImage[ship]} alt={ship} />
        </div>
        <div className="col-6 d-flex">
          {new Array(health).fill(0).map((_, i) => {
            if (i + 1 <= damage) {
              return (
                <img
                  className="Ship__indicator img-fluid"
                  key={i}
                  src="/assets/Hit small.png"
                  alt="hit"
                />
              );
            } else {
              return (
                <img
                  className="Ship__indicator"
                  key={i}
                  src="/assets/Miss small.png"
                  alt="miss"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Ship;
