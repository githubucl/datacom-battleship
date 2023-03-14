import React from "react";
import { TGridInfo } from "../../../../types";

//style
import "./Grid.scss";

type TGridProps = TGridInfo & {
  onGridClick: (clickedPosition: string) => void;
};
const Grid = ({
  position,
  ship,
  fired,
  onGridClick,
}: TGridProps): JSX.Element => {
  return (
    <div className="Grid" onClick={() => onGridClick(position)}>
      {fired &&
        (ship === "none" ? (
          <img className="Grid__image" src="/assets/Miss.png" alt="MISS" />
        ) : (
          <img className="Grid__image" src="/assets/Hit.png" alt="HIT" />
        ))}
    </div>
  );
};

export default Grid;
