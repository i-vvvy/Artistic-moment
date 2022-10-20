import { memo, useCallback, useEffect, useState } from 'react';
import Loader from '../common/loader';
import ConcertItem from './ConcertItem';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import MonthlyConcertSlider from './MonthlyConcertSlider';
import PopularConcerSlider from './PopularConcerSlider';

const ConcertListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }
`;

const ConcertList = ({ concert, search }) => {
  let date = new Date();
  let month = date.getMonth() + 1;
  return (
    <ConcertListContainer>
      <h2>{month}월의 공연</h2>
      <MonthlyConcertSlider concert={concert} />
      <h2>인기 공연</h2>
      <PopularConcerSlider concert={concert} />
    </ConcertListContainer>
  );
};

export default ConcertList;
