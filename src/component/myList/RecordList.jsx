import React, { useEffect } from 'react';
import RecordItem from './RecordItem';
import styled from 'styled-components';

const RecordListContainer = styled.div`
  margin-bottom: 10rem;

  .count {
    width: 100%;
    height: 18rem;
    margin: auto;
    margin-bottom: 6rem;
    font-size: 1.8rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ede9e1;
  }
`;

const NoList = styled.div`
  height: 24rem;
  /* background-color: pink; */
`;

const RecordList = ({ recordList }) => {
  return (
    <RecordListContainer>
      <div className="count">There's {recordList.length} Artistic Moment</div>
      {recordList.length < 1 ? (
        <NoList />
      ) : (
        <div>
          {recordList.map(item => (
            <RecordItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </RecordListContainer>
  );
};

RecordList.defaultProps = {
  recordList: [],
};

export default RecordList;
