import React from "react";
import ScoreCard from "./ScoreCard";

const ScoreBoard = () => {
  return (
    <div className="d-flex">
      <ScoreCard name="player 1" score="00" color="yellow" />
      <ScoreCard name="player 2" score="00" color="blue" />
    </div>
  );
};

export default ScoreBoard;
