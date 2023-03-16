import React from "react";
import "./ScoreCard.scss";

type TScoreCard = {
  name: string;
  score: string;
  color: string;
};
const ScoreCard = ({ name, score, color }: TScoreCard): JSX.Element => {
  return (
    <div className={`ScoreCard ${color}`}>
      <div className="ScoreCard__number">{score}</div>
      <div className="ScoreCard__name">{name}</div>
    </div>
  );
};

export default ScoreCard;
