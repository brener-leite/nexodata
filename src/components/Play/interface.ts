import { Dispatch, SetStateAction } from "react";

export type PlayType = "rock" | "paper" | "scissors" | undefined;

export interface PlayProps {
  play?: PlayType;
  isClickable: boolean;
  setPlay?: Dispatch<SetStateAction<PlayType>>;
}
