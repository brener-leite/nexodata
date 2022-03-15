import { Dispatch, SetStateAction } from "react";
import { PlayType } from "../../../types/types";

export interface PlayProps {
  play?: PlayType;
  isClickable: boolean;
  setPlay?: Dispatch<SetStateAction<PlayType>>;
}
