import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {
  return <S.Button onClick={() => onClick()}>{children}</S.Button>;
};

export default Button;
