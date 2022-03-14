import React from "react";
import { ScoreboardProps } from "./interface";
import * as S from "./styles";

const Scoreboard: React.FC<ScoreboardProps> = ({ score }: ScoreboardProps) => {
  return (
    <S.Container>
      <S.Score>
        score
        <span>{score}</span>
      </S.Score>
    </S.Container>
  );
};

export default Scoreboard;
