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
      <p className={styles.txt}>마음을 따뜻하게 데워줄</p>
      <h2 className={styles.tit}>{month}월의 공연</h2>
      <MonthlyConcertSlider concert={concert} />
      <div data-aos="fade-up">
        <p className={styles.txt}>감성을 충만하게 채워줄</p>
        <h2 className={styles.tit}>인기 공연</h2>
        <PopularConcerSlider concert={concert} />
      </div>
    </div>
  );
};

export default ConcertList;
