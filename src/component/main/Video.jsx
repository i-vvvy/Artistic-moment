import React from 'react';
import { Section, VideoContainer, Content, VideoContent } from './Video.style';
import YouTube from 'react-youtube';

const Video = () => {
  return (
    <Section>
      <VideoContainer>
        <Content>
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
        </Content>
        <VideoContent>
          <YouTube
            videoId="ZtjCYXTrZik"
            opts={{
              width: '660',
              height: '371',
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
        </VideoContent>
      </VideoContainer>
    </Section>
  );
};

export default Video;
