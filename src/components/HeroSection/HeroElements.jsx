import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var(--clr-light-grey);
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 650px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroLeftContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 40px;
  }
`;
export const HeroRightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HeroHeader = styled.h1`
  color: var(--clr-dark-blue);
  font-size: 40px;
  font-family: "font-bold";
  text-align: left;
  letter-spacing: 1px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const HeroSubheader = styled.p`
  margin-top: 24px;
  color: var(--clr-dark-grey);
  font-size: 18px;
  text-align: left;
  width: 100%;
  letter-spacing: 1.8px;
  line-height: 1.8;
  font-family: "font-regular";

  @media screen and (max-width: 768px) {

    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
