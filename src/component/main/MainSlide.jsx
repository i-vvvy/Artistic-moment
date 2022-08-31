import React from 'react';
import { Section, SlideContainer, Content, Poster } from './MainSlide.style';

const MainSlide = () => {
  return (
    <Section>
      <SlideContainer>
        <Content>
          <h2>정세윤 : A Grand Day Out</h2>
          <span></span>
          <p className="date">
            2022.08.09 - <br />
            2022.08.28
          </p>
          <p>클램프갤러리</p>
        </Content>
        <Poster>
          <img
            src="https://www.syu.ac.kr/wp-content/uploads/2021/04/%EC%A0%84%EC%8B%9C%ED%9A%8C-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
            alt=""
          />
        </Poster>
      </SlideContainer>
    </Section>
  );
};

export default MainSlide;
