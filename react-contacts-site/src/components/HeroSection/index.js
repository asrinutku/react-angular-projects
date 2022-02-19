import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  Content,
  ContentH1,
  ContentButtonWrapper,
  ContentP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <Content>
        <ContentH1>Lorem Ipsum</ContentH1>
        <ContentP>
          Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
          Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar
          uzanan 2000 yıllık bir geçmişi vardır.
        </ContentP>
        <ContentButtonWrapper>
          <Button
            to="uye-ol"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Keşfet {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ContentButtonWrapper>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
