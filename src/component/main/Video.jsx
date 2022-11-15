import React from 'react';
import YouTube from 'react-youtube';
import styles from './Video.module.css';

const Video = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            SEJONG SEASON 2022
            <br />
            Fall Winter
          </h2>
          <p>
            9월부터 12월까지 우리의 일상을 알차게 채워줄
            <br />
            세종문화회관의 다채로운 공연과 전시
            <br />
            2022 세종시즌과 함께 하세요
          </p>
        </div>
        <div className={styles.videoContent}>
          <YouTube
            className={styles.youTube}
            videoId="ZtjCYXTrZik"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={e => {
              e.target.stopVideo(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
