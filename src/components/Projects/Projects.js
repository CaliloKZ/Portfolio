import React from 'react';
import YouTube from 'react-youtube';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImagesGrid } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const opts = {
  height: '400',
  width: '400',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};


const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>My Games</SectionTitle>
  </Section>
);

export default Projects;