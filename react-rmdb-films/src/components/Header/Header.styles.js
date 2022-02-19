import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(6, 33, 51);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--MaxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  margin-right: auto;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

