import React, { useEffect } from 'react';
import MonthlyConcertSlider from './MonthlyConcertSlider';
import PopularConcerSlider from './PopularConcerSlider';
import styles from './ConcertList.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConcertList = ({ concert }) => {
  let date = new Date();
  let month = date.getMonth() + 1;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={styles.container}>
      <h2>{month}월의 공연</h2>
      <MonthlyConcertSlider concert={concert} />
      <div data-aos="fade-up">
        <h2>인기 공연</h2>
        <PopularConcerSlider concert={concert} />
      </div>
    </div>
  );
};

export default ConcertList;
