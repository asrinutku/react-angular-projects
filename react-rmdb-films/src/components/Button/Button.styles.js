import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  height: 50px;
  width: 25%;
  border-radius: 30px;
  color: var(--white);
  font-size: var(--fontBig);
  margin: 30px auto;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
