import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Developer Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I am full-Stack developer based in Texas. I develop Mobile
        Application as well as Web Application. See Technology section for my
        specific skills.
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/yosuke65")}>
      Learn More
    </Button>
    </LeftSection>
  </Section>
);

export default Hero;
