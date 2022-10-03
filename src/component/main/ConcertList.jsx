import React from 'react';
import ConcertItem from './ConcertItem';
import { Col, Row } from 'antd';
import styled from 'styled-components';

const ConcertListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 120rem;
  margin: 0 auto;
`;

const ConcertList = ({ concert }) => {
  const concertList = concert;
  console.log(concertList);

  return (
    <ConcertListContainer>
      <Row gutter={[90, 60]}>
        {concertList.map((item, index) => (
          <Col span={8} key={index}>
            <ConcertItem item={item} />
          </Col>
        ))}
      </Row>
    </ConcertListContainer>
  );
};

export default ConcertList;
