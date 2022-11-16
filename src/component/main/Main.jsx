import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Main.module.css';

const Main = ({ concert }) => {
  const MainConcert = concert.slice(16, 22);

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
              <div className={styles.poster_1} />
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
              <div className={styles.poster_2} />
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
              <div className={styles.poster_3} />
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
              <div className={styles.poster_4} />
              <img
                className="d-block w-100"
                src={MainConcert[3].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{MainConcert[4].TITLE}</h2>
              <span />

              <p className={styles.date}>
                {MainConcert[4].START_DATE} ~ <br />
                {MainConcert[4].END_DATE}
              </p>
              <p>{MainConcert[4].PLACE_NAME}</p>
            </div>

            <div className={styles.poster}>
              <div className={styles.poster_5} />
              <img
                className="d-block w-100"
                src={MainConcert[4].FILE_URL_MI}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
