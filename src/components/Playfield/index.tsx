import Play from "components/Play";
import React from "react";
import { PlayfieldProps } from "./interface";
import * as S from "./styles";

const Playfield: React.FC<PlayfieldProps> = ({ setPlay }: PlayfieldProps) => {
  return (
    <S.Container>
      <Play play="paper" isClickable={true} setPlay={setPlay} />
      <Play play="rock" isClickable={true} setPlay={setPlay} />
      <Play play="scissors" isClickable={true} setPlay={setPlay} />
    </S.Container>
  );
};

export default Playfield;
