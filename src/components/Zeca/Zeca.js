import React from 'react';
import YouTube from 'react-youtube';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImagesGrid, BoldTitles } from './ZecaStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, zeca } from '../../constants/constants';

const opts = {
  height: '400',
  width: '400',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};


const Zeca = () => (
  <Section nopadding id="Zeca">
    <SectionDivider />
    <GridContainer>
      {zeca.map((p, i) => {
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

export default Zeca;