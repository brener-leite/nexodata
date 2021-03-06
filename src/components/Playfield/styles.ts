import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;
