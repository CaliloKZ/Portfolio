import React from 'react';
import YouTube from 'react-youtube';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImagesGrid } from './PetworkStyles';
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


const Petwork = () => (
  <Section nopadding id="Zeca">
    <SectionDivider />
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
              <TitleContent>
              <Hr />
              <HeaderThree title>Petwork</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <ImagesGrid>  
              <Img src={p.image_0}/>
              <Img src={p.image_1}/>
              <Img src={p.image_2}/>
              <Img src={p.image_3}/>
            </ImagesGrid>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Petwork;