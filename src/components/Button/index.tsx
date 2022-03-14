import React from "react";
import * as S from "./styles";

const Button: React.FC = ({ onClick, children }) => {
  return <S.Button onClick={() => onClick}>{children}</S.Button>;
};

export default Button;
