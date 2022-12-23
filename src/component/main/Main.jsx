import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.section}>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content_tit}>
                <h2 className={styles.visual_tit_01}>
                  Certain Call <br />
                  민아X슬기 <br />
                  연말 재즈콘서트
                </h2>
              </div>
              <div className={styles.content_info}>
                <p className={styles.date}>20221230 ~ 20221231</p>
                <p>꿈의숲 퍼포먼스홀</p>
              </div>
            </div>

            <div className={styles.poster}>
              <div className={styles.poster_01}>
                <img
                  className="d-block w-100"
                  src="/assets/img-visual-01.jpeg"
                  alt="Certain Call 민아X슬기 연말 재즈콘서트 공연 포스터"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content_tit}>
                <h2 className={styles.visual_tit_02}>
                  싱어송라이터 시리즈 <br /> 빈센트 블루
                </h2>
              </div>
              <div className={styles.content_info}>
                <p className={styles.date}>20221216 ~ 20221216</p>
                <p>세종S씨어터</p>
              </div>
            </div>

            <div className={styles.poster}>
              <div className={styles.poster_02}>
                <img
                  className="d-block w-100"
                  src="/assets/img-visual-02.jpeg"
                  alt="싱어송라이터 시리즈 - 빈센트 블루 공연 포스터"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content_tit}>
                <h2 className={styles.visual_tit_03}>
                  하피스트 곽정의 <br />
                  크리스마스 콘서트 <br />
                  새로운 여정
                </h2>
              </div>
              <div className={styles.content_info}>
                <p className={styles.date}>20221227 ~ 20221227</p>
                <p>세종체임버홀</p>
              </div>
            </div>

            <div className={styles.poster}>
              <div className={styles.poster_03}>
                <img
                  className="d-block w-100"
                  src="/assets/img-visual-03.jpeg"
                  alt="하피스트 곽정의 크리스마스 콘서트: 새로운 여정 공연 포스터"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content_tit}>
                <h2 className={styles.visual_tit_04}>
                  쇼팽 in 뉴욕 <br /> 클래시컬 재즈 나잇
                </h2>
              </div>
              <div className={styles.content_info}>
                <p className={styles.date}>20221230 ~ 20221230</p>
                <p>세종S씨어터</p>
              </div>
            </div>

            <div className={styles.poster}>
              <div className={styles.poster_04}>
                <img
                  className="d-block w-100"
                  src="/assets/img-visual-04.jpeg"
                  alt="쇼팽in뉴욕 - 클래시컬 재즈 나잇 공연 포스터"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
