import React, { useEffect, useState } from 'react';
import {
  Section,
  ConcertInfoContainer,
  Left,
  Right,
} from './ConcertInfo.style';

const ConcertInfo = ({ concertInfo }) => {
  return (
    <Section>
      <ConcertInfoContainer>
        <Left>
          <div className="poster">
            <img src={concertInfo?.FILE_URL_MI} alt="poster" />
          </div>
        </Left>
        <Right>
          <h2>{concertInfo?.TITLE}</h2>
          <div className="tag">
            <span>{concertInfo?.GENRE_NAME}</span>
            <span>{concertInfo?.AGE}</span>
          </div>
          <h4>
            일자 | {concertInfo?.START_DATE} ~ {concertInfo?.END_DATE}
          </h4>
          <h4>장소 | {concertInfo?.PLACE_NAME}</h4>
          <h4>문의 | {concertInfo?.INQUIRY_PHONE}</h4>
        </Right>
      </ConcertInfoContainer>
    </Section>
  );
};

export default ConcertInfo;
