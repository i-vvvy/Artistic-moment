import React from 'react';
import ConcertItem from './ConcertItem';
import { Col, Row } from 'antd';
import styled from 'styled-components';

const ConcertListContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 120rem;
  margin: 0 auto 10rem;
`;

const SearchList = ({ concert, search }) => {
  const filteredList = concert.filter(item => {
    return (
      item.TITLE.replace(' ', '')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      item.PLACE_NAME.replace(' ', '')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  });

  return (
    <ConcertListContainer>
      <Row gutter={[90, 60]}>
        {filteredList.map((item, index) => (
          <Col span={8} key={index}>
            <ConcertItem item={item} />
          </Col>
        ))}
      </Row>
    </ConcertListContainer>
  );
};

export default SearchList;
