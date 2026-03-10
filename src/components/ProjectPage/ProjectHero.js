import React from "react";
import ReactPlayer from "react-player";

import {
HeroContainer,
VideoBackground,
Overlay,
HeroContent,
Title,
Role,
TechRow,
TechBadge
} from "./ProjectHeroStyles";

const ProjectHero = ({ project }) => {

return (

<HeroContainer>

<VideoBackground>

<ReactPlayer
url={project.video}
playing
muted
loop
width="100%"
height="100%"
style={{
position: "absolute",
top: 0,
left: 0,
objectFit: "cover"
}}
/>

</VideoBackground>

<Overlay />

<HeroContent>

<Title>{project.title}</Title>

<Role>{project.role}</Role>

<TechRow>

{project.tech.map((t,i)=>(
<TechBadge key={i}>{t}</TechBadge>
))}

</TechRow>

</HeroContent>

</HeroContainer>

);

};

export default ProjectHero;