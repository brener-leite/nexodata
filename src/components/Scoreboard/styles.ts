import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ecf0f1;
  border: 2px solid #bdc3c7;
  border-radius: 8px;
  padding: 15px 0;
  margin-bottom: 50px;
  width: 100%;
`;

export const Score = styled.p`
  color: #34495e;
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  span {
    display: block;
    font-size: 36px;
    line-height: 42px;
  }
`;
