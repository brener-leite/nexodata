import React from "react";
import * as S from "./styles";
import Play from "components/Play";
import { ResultProps } from "./interface";

const Result: React.FC<ResultProps> = ({ player, machine }: ResultProps) => {
  return (
    <S.Container>
      <Play play={player} isClickable={false} />
      <Play play={machine} isClickable={false} />
    </S.Container>
  );
};

export default Result;
