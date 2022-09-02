import React from 'react';
import ExhibitionItem from './ExhibitionItem';
import { Col, Row } from 'antd';
import styled from 'styled-components';

const ExhibitionListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 120rem;
  margin: 0 auto;
`;

const ExhibitionList = () => {
  return (
    <ExhibitionListContainer>
      <Row gutter={[90, 40]}>
        {/* {exhibitionList.map(item => (
          <Col span={8}>
            <ExhibitionItem item={item} />
          </Col>
        ))} */}
        <Col span={8}>
          <ExhibitionItem />
        </Col>
        <Col span={8}>
          <ExhibitionItem />
        </Col>
        <Col span={8}>
          <ExhibitionItem />
        </Col>
        <Col span={8}>
          <ExhibitionItem />
        </Col>
        <Col span={8}>
          <ExhibitionItem />
        </Col>
        <Col span={8}>
          <ExhibitionItem />
        </Col>
      </Row>
    </ExhibitionListContainer>
  );
};

export default ExhibitionList;
