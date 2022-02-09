import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there, <br />
          I'm Calilo Kizan
        </SectionTitle>
        <SectionText>
        I'm a passionate Unity developer from Brazil looking foward to make awesome games. I take a lot of joy in learning new tools and new technologies. My main skills are Unity, C# and a variety of Unity tools
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;