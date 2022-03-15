import styled from "styled-components";

export const Text = styled.p`
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
  color: #ecf0f1;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Result = styled(Text)`
  font-size: 36px;
  line-height: 42px;

  @media screen and (min-width: 1024px) {
    font-size: 46px;
    line-height: 52px;
  }
`;
