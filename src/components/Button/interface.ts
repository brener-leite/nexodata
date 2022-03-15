import { Dispatch, SetStateAction } from "react";
import { TurnType } from "../../../types/types";

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}
