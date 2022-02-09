import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImagesGrid } from './EducStyles';
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


const Educational = () => (
  <Section nopadding id="Educational">
    <SectionDivider />
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
            <Hr />
              <HeaderThree title>Educational Games</HeaderThree>
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

export default Educational;