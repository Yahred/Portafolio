import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido a <br />
          Mi portafolio personal
        </SectionTitle>
        <Button onClick={() => window.location='https://www.linkedin.com/in/yahred-gast%C3%A9lum-vel%C3%A1zquez-06303b235/'}>Más informacion</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;