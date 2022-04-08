import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Proyectos escolares'},
  { number: 97, text: 'Promedio de egreso de la institucion educativa Cetis107 ', },
  { number: 2, text: 'Insignias de aptitud en LinkedIn', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Logros personales</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
