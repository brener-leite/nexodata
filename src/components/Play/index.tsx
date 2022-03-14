import React from "react";
import { PlayProps } from "./interface";
import * as S from "./styles";

const Play: React.FC<PlayProps> = ({
  play,
  isClickable,
  setPlay,
}: PlayProps) => {
  const onClick = () => {
    if (isClickable) {
      setPlay(play);
    }
  };

  const plays = {
    paper: 1,
    rock: 2,
    scissors: 3,
  };

  return (
    <S.Container
      play={play}
      isClickable={isClickable}
      onClick={() => onClick()}
    >
      {plays[play] || ""}
    </S.Container>
  );
};

export default Play;
