import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ConcertItem from './ConcertItem';
import styles from './ConcertSlider.module.css';

const MonthlyConcertSlider = ({ concert }) => {
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

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  const monthly = `${year}${month}`;

  const monthlyConcert = concert.filter(
    item => item.START_DATE.substr(0, 6) === monthly,
  );

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel} responsive={responsive}>
        {monthlyConcert.map((item, index) => (
          <ConcertItem key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MonthlyConcertSlider;
