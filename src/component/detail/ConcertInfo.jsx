import React from 'react';
import styles from './ConcertInfo.module.css';

const ConcertInfo = ({ concertInfo }) => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.poster}>
            <img src={concertInfo?.FILE_URL_MI} alt="공연 포스터" />
          </div>
        </div>
        <div className={styles.right}>
          <h2>{concertInfo?.TITLE}</h2>
          <div className={styles.tag}>
            <span>{concertInfo?.GENRE_NAME}</span>
            <span>{concertInfo?.AGE}</span>
          </div>
          <h4>
            일자 | {concertInfo?.START_DATE} ~ {concertInfo?.END_DATE}
          </h4>
          <h4>장소 | {concertInfo?.PLACE_NAME}</h4>
          <h4>문의 | {concertInfo?.INQUIRY_PHONE}</h4>
        </div>
      </div>
    </section>
  );
};

export default ConcertInfo;
