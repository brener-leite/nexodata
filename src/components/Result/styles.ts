import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    justify-content: space-around;
  }
`;
