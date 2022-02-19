import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .column {
    display: block;
    width: 30%;
    height: 70px;
    border-radius: 20px;
    margin:  15px;
    background: var(--medGrey);  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
    font-size: larger;
  }
`;
