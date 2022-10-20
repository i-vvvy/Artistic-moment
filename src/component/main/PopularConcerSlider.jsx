import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ConcertItem from './ConcertItem';
import styled from 'styled-components';

const PopularConcertSliderContainer = styled.div`
  .react-multiple-carousel__arrow {
    border-radius: 0;
    margin-top: -140px;
    margin-right: -50px;
    margin-left: -50px;
    min-height: 44px;
    min-width: 44px;
  }
`;

const PopularConcerSlider = ({ concert }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let num = '6';
  const popularConcert = concert.filter(
    item => item.END_DATE.slice(-1) === num,
  );

  return (
    <PopularConcertSliderContainer>
      <Carousel responsive={responsive}>
        {popularConcert.map((item, index) => (
          <ConcertItem key={index} item={item} />
        ))}
      </Carousel>
    </PopularConcertSliderContainer>
  );
};

export default PopularConcerSlider;
