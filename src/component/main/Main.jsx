import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainItem from './MainItem';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
`;

const Main = ({ concert }) => {
  const settings = {
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const MainConcert = concert.slice(10, 15);

  return (
    <MainContainer>
      <Slider {...settings}>
        {MainConcert.map((item, index) => (
          <MainItem key={index} item={item} />
        ))}
      </Slider>
    </MainContainer>
  );
};

export default Main;
