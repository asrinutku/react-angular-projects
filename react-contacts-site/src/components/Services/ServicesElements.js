import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: black;
  height: 800px;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  width: 500px;
  border-radius: 20px;
  padding: 30px;
  height: 50%;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 50%;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
