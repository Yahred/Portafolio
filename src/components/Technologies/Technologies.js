import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
     He trabajado y aprendido sobre distintas tecnologías en el mercado en
    a lo largo de mi paso por la universidad
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Programación de aplicaciones de escritorio</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Data Sciencie</ListTitle>
          <ListParagraph>
            Experiencia con  <br />
           Python (Matplotlib, Pandas, Tkinter)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
