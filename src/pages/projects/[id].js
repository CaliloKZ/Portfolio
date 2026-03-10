import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { projects } from "../../constants/constants";
import Link from "next/link";
import { BackButton } from "../../components/ProjectPage/ProjectPageStyles";
import { FaSteam, FaGooglePlay, FaApple } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

import {
PageContainer,
Title,
Role,
VideoContainer,
SectionTitle,
Text,
List,
ListItem,
TechContainer,
TechBadge,
ScreenshotGrid,
Screenshot,
Divider,
Highlight,
StoreLinks,
StoreButton
} from "../../components/ProjectPage/ProjectPageStyles";

export default function ProjectPage() {

const router = useRouter();
const { id } = router.query;

const project = projects.find(p => p.slug === id);

if (!router.isReady || !project) {
  return <div>Loading...</div>;
}

return (

<PageContainer>

<Link href="/" passHref>
  <BackButton>← Back to Projects</BackButton>
</Link>

<Title>{project.title}</Title>

<Role>{project.role}</Role>

<VideoContainer>

<ReactPlayer
url={project.video}
width="100%"
height="500px"
controls
/>

</VideoContainer>

<SectionTitle>Overview</SectionTitle>

<Text dangerouslySetInnerHTML={{ __html: project.longDescription }} />
<Divider />
{project.links && (
<>
<SectionTitle>Play the Game</SectionTitle>

<StoreLinks>

{project.links.steam && (
<StoreButton href={project.links.steam} target="_blank">
<FaSteam />
Steam
</StoreButton>
)}

{project.links.epic && (
<StoreButton href={project.links.epic} target="_blank">
<SiEpicgames />
Epic Games
</StoreButton>
)}

{project.links.playstore && (
<StoreButton href={project.links.playstore} target="_blank">
<FaGooglePlay />
Google Play
</StoreButton>
)}

{project.links.appstore && (
<StoreButton href={project.links.appstore} target="_blank">
<FaApple />
App Store
</StoreButton>
)}

</StoreLinks>
</>
)}
<SectionTitle>Technologies</SectionTitle>

<TechContainer>

{project.tech.map((t,i)=>(
<TechBadge key={i}>{t}</TechBadge>
))}

</TechContainer>
<Divider />
<SectionTitle>Key Contributions</SectionTitle>

<List>

{project.contributions.map((c,i)=>(
<ListItem key={i}>{c}</ListItem>
))}

</List>

{project.challenges && (
<>
<Divider />
<SectionTitle>Technical Challenges</SectionTitle>

<List>

{project.challenges.map((c,i)=>(
<ListItem key={i}>{c}</ListItem>
))}

</List>
</>
)}

{project.screenshots && (

<>
<Divider />
<SectionTitle>Screenshots</SectionTitle>

<ScreenshotGrid>

{project.screenshots.map((img,i)=>(
<Screenshot key={i} src={img} />
))}

</ScreenshotGrid>

</>
)}

</PageContainer>

);

}