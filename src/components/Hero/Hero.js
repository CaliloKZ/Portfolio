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
          I'm a Senior Unity Developer with shipped titles across Desktop, WebGL, Google Play, and the Apple App Store.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;