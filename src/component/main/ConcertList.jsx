import MonthlyConcertSlider from './MonthlyConcertSlider';
import PopularConcerSlider from './PopularConcerSlider';
import styles from './ConcertList.module.css';

const ConcertList = ({ concert, search }) => {
  let date = new Date();
  let month = date.getMonth() + 2;
  return (
    <div className={styles.container}>
      <h2>{month}월의 공연</h2>
      <MonthlyConcertSlider concert={concert} />
      <h2>인기 공연</h2>
      <PopularConcerSlider concert={concert} />
    </div>
  );
};

export default ConcertList;
