import React from 'react';
import { Section, SectionTitle } from '../styles/GlobalComponents';
import styled from 'styled-components';

const List = styled.ul`
max-width: 900px;
margin: auto;
line-height: 2.2rem;
`

const Item = styled.li`
margin-bottom: 1rem;
`

const TechnicalHighlights = () => (
<Section id="highlights">
<SectionTitle>Technical Highlights</SectionTitle>

<List>

<Item>
Developed multiplayer gameplay systems using Unity and Photon.
</Item>

<Item>
Built custom Unity Editor tools to accelerate content creation workflows.
</Item>

<Item>
Implemented gameplay architectures for combat systems and AI interactions.
</Item>

<Item>
Shipped games across multiple platforms including Windows, Android, WebGL, and iOS.
</Item>

</List>

</Section>
)

export default TechnicalHighlights