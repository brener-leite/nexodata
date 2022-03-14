import styled from "styled-components";

const types = {
  rock: "#27AE60",
  paper: "#F1C40F",
  scissors: "#2980B9",
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 50%;
  border: 16px solid;
  border-color: ${(props) => types[props.play] || "#fff"};
  margin: 10px;
  cursor: ${(props) => (props.isClickable ? "pointer" : "auto")};

  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;
