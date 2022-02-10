import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImagesGrid, BoldTitles } from './EducStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { educational, projects } from '../../constants/constants';

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
      {educational.map((p, i) => {
        return (
          <BlogCard key={i}>
              <TitleContent>
              <Hr />
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">
              <BoldTitles><b>Platforms:</b> {p.platform}</BoldTitles> 
              <BoldTitles><b>Build:</b> {p.build}</BoldTitles> 
              <br />
              {p.description}
              <br />
              <br />
              {p.description2}
              </CardInfo>
            <ImagesGrid>  
              <Img src={p.image_0}/>
              <Img src={p.image_1}/>
              <Img src={p.image_2}/>
              <Img src={p.image_3}/>
              <Img src={p.image_4}/>
              <Img src={p.image_5}/>
            </ImagesGrid>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Educational;