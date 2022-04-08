import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portafolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre mí</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
      <SocialIcons href="https://www.linkedin.com/in/yahred-gast%C3%A9lum-vel%C3%A1zquez-06303b235/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        <SocialIcons href="https://www.instagram.com/_yahred/">
            <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
