import React from 'react';
import ReactPlayer from 'react-player'

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    VideoWrapper,
    Player,
    TechBadge
} from './ProjectsStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { RoleBadge } from './ProjectsStyles';
import Link from "next/link";

const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

const opts = {
  height: '360px',
  width: '380px',
  playerVars: {
    
    autoplay: 0,
  },
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />

    <SectionTitle main>Featured Projects</SectionTitle>

    <GridContainer>
    {featuredProjects.map((p,i)=>(
    <BlogCard key={i}>
            <div className='wrapper'>
                <VideoWrapper>
                    <Player>
                        <ReactPlayer
                            url={p.video}
                            width='100%'
                            height='100%'
                            controls
                        />
                    </Player>
                </VideoWrapper>
            </div>
            <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                {p.role && <RoleBadge>{p.role}</RoleBadge>}
                <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <TechBadge key={i}>{t}</TechBadge>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <Link href={`/projects/${p.slug}`}>
              <ExternalLinks>Know More</ExternalLinks>
              </Link>
            </UtilityList>
          </BlogCard>
    ))}
    </GridContainer>

    <SectionTitle>Other Projects</SectionTitle>
    <GridContainer>
    {otherProjects.map((p,i)=>(
    <BlogCard key={i}>
            <div className='wrapper'>
                <VideoWrapper>
                    <Player>
                        <ReactPlayer
                            url={p.video}
                            width='100%'
                            height='100%'
                            controls
                        />
                    </Player>
                </VideoWrapper>
            </div>
            <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                {p.role && <RoleBadge>{p.role}</RoleBadge>}
                <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
              {p.tags.map((t, i) => {
                return <TechBadge key={i}>{t}</TechBadge>;
              })}
            </TagList>
            </div>
          </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;