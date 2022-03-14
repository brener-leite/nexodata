import { Dispatch, SetStateAction } from "react";
import { PlayType } from "components/Play/interface";

export interface PlayfieldProps {
  setPlay: Dispatch<SetStateAction<PlayType>>;
}
