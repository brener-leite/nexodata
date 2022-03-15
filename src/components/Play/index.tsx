import React from "react";
import { PlayProps } from "./interface";
import * as S from "./styles";
import PaperIcon from "../../../public/icons/paper.svg";
import RockIcon from "../../../public/icons/rock.svg";
import ScissorsIcon from "../../../public/icons/scissors.svg";

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
    paper: <PaperIcon />,
    rock: <RockIcon />,
    scissors: <ScissorsIcon />,
  };

  return (
    <S.Container
      play={play}
      isClickable={isClickable}
      onClick={() => onClick()}
    >
      {plays[play]}
    </S.Container>
  );
};

export default Play;
