import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  box-shadow: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2980b9;
  width: 100%;
  max-width: 246px;
  border-radius: 8px;
  padding: 8px 15px;
  cursor: pointer;

  font-size: 18px;
  line-height: 21px;
  color: #ecf0f1;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
