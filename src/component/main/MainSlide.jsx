import React from 'react';
import { Section, SlideContainer, Content, Poster } from './MainSlide.style';

const MainSlide = ({ concert }) => {
  console.log('mainslide', concert[7].FILE_URL_MI);
  return (
    <Section>
      <SlideContainer>
        <Content>
          <h2>{concert[2].TITLE}</h2>
          <span />
          <p className="date">
            {concert[2].START_DATE} ~ <br />
            {concert[2].END_DATE}
          </p>
          <p>{concert[2].PLACE_NAME}</p>
        </Content>
        <Poster>
          <img src={concert[2].FILE_URL_MI} alt="" />
        </Poster>
      </SlideContainer>
    </Section>
  );
};

export default MainSlide;
