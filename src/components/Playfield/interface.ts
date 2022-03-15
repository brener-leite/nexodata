import { Dispatch, SetStateAction } from "react";
import { PlayType } from "../../../types/types";

export interface PlayfieldProps {
  setPlay: Dispatch<SetStateAction<PlayType>>;
}
