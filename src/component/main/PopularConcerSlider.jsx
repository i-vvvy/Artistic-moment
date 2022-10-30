import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ConcertItem from './ConcertItem';
import styles from './ConcertSlider.module.css';

const PopularConcerSlider = ({ concert }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { min: 1800, max: 4000 },
      items: 4,
    },
    desktop: {
      breakpoint: { min: 1200, max: 1799 },
      items: 3,
    },
    tablet: {
      breakpoint: { min: 768, max: 1199 },
      items: 2,
    },
    mobile: {
      breakpoint: { min: 0, max: 767 },
      items: 1,
    },
  };

  let num = '6';
  const popularConcert = concert.filter(
    item => item.END_DATE.slice(-1) === num,
  );

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel} responsive={responsive}>
        {popularConcert.map((item, index) => (
          <ConcertItem key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularConcerSlider;
