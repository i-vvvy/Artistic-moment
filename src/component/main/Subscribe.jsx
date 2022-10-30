import React from 'react';
import SubscribeModals from '../common/SubscribeModals';
import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <h4>예술적인 순간을 기록하다</h4>
      <h2>Artistic Moment</h2>
      <div className="line" />
      <p>세종문화회관에서 만날 수 있는 다채로운 공연 정보를 전해드려요</p>
      <SubscribeModals />
    </div>
  );
};

export default Subscribe;
