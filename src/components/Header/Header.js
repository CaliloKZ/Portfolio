import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="https://calilokizan.vercel.app/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2> 
      <li>
        <Link href="#Educational">
          <NavLink>Educational</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Zeca">
          <NavLink>Zeca</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Petwork">
          <NavLink>Petwork</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Manu">
          <NavLink>Manu</NavLink>
        </Link>
      </li>
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/CaliloKZ">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/calilo-kizan/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
