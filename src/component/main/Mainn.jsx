import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Mainn.module.css';
// import MainnItem from './MainnItem';

const Mainn = ({ concert }) => {
  const MainConcert = concert.slice(11, 16);

  return (
    <div className={styles.section}>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{MainConcert[0].TITLE}</h2>
              <span />
              <p className={styles.date}>
                {MainConcert[0].START_DATE} ~ <br />
                {MainConcert[0].END_DATE}
              </p>
              <p>{MainConcert[0].PLACE_NAME}</p>
            </div>

            <div className={styles.poster}>
              <img
                className="d-block w-100"
                src={MainConcert[0].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{MainConcert[1].TITLE}</h2>
              <span />

              <p className={styles.date}>
                {MainConcert[1].START_DATE} ~ <br />
                {MainConcert[1].END_DATE}
              </p>
              <p>{MainConcert[1].PLACE_NAME}</p>
            </div>

            <div className={styles.poster}>
              <img
                className="d-block w-100"
                src={MainConcert[1].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{MainConcert[2].TITLE}</h2>
              <span />

              <p className={styles.date}>
                {MainConcert[2].START_DATE} ~ <br />
                {MainConcert[2].END_DATE}
              </p>
              <p>{MainConcert[2].PLACE_NAME}</p>
            </div>

            <div className={styles.poster}>
              <img
                className="d-block w-100"
                src={MainConcert[2].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{MainConcert[3].TITLE}</h2>
              <span />

              <p className={styles.date}>
                {MainConcert[3].START_DATE} ~ <br />
                {MainConcert[3].END_DATE}
              </p>
              <p>{MainConcert[3].PLACE_NAME}</p>
            </div>

            <div className={styles.poster}>
              <img
                className="d-block w-100"
                src={MainConcert[3].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Mainn;
