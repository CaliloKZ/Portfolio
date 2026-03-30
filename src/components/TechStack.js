import React from 'react';
import { Section, SectionSubTitle, SectionTitle } from '../styles/GlobalComponents';
import styled from 'styled-components';

const StackContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
margin-top: 2rem;
`

const Badge = styled.div`
background: #2f3e63;
color: white;
padding: 8px 16px;
border-radius: 20px;
font-size: 1.4rem;
`

const mainSkills = [
  'Unity',
  'C#',
  'Gameplay Systems',
  'Multiplayer',
  'Photon Quantum',
  'Photon Fusion 2',
  'Unity Editor Tools',
  'Performance Optimization'
];

const otherSkills = [
  // Architecture / Advanced
  'Simulation & AI',
  'Game Architecture',
  'Deterministic Networking',
  'Memory Management',
  'Profiling (CPU/RAM)',

  // Tools / Pipeline
  'CI/CD Pipelines',
  'Build Automation',
  'Jenkins',
  'Fastlane',

  // Backend / Integration
  'REST APIs',
  'Backend Integration',
  'SQL',

  // Platforms
  'Android',
  'iOS',
  'Windows',
  'WebGL',

  // Infra
  'Google Cloud',
  'Linux (Ubuntu)',

  // UI
  'Unity UI (Canvas)',
  'UI Systems'
];

const TechStack = () => (
  <Section id="tech">
    <SectionTitle>Technical Skills</SectionTitle>

    <SectionSubTitle>Main Skills</SectionSubTitle>
    <StackContainer>
      {mainSkills.map((t, i) => (
        <Badge key={`main-${i}`}>{t}</Badge>
      ))}
    </StackContainer>

    <SectionSubTitle>Other Skills</SectionSubTitle>
    <StackContainer>
      {otherSkills.map((t, i) => (
        <Badge key={`other-${i}`}>{t}</Badge>
      ))}
    </StackContainer>
  </Section>
);

export default TechStack