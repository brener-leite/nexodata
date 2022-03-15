import React from "react";
import { TextProps } from "./interface";
import * as S from "./styles";

const Text: React.FC<TextProps> = ({ text, final }: TextProps) => {
  return (
    <>
      {text && <S.Text>{text}</S.Text>}
      {final && <S.Result>{final}</S.Result>}
    </>
  );
};

export default Text;
