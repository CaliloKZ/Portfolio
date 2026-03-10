import React from 'react';
import { Section, SectionTitle } from '../styles/GlobalComponents';
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

const tech = [
'Unity',
'C#',
'Gameplay Systems',
'Multiplayer',
'Photon',
'Unity Editor Tools',
'Mobile Development',
'Performance Optimization'
]

const TechStack = () => (
<Section id="tech">
<SectionTitle>Technical Skills</SectionTitle>

<StackContainer>
{tech.map((t,i)=>(
<Badge key={i}>{t}</Badge>
))}
</StackContainer>

</Section>
)

export default TechStack