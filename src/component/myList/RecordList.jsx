import React from 'react';
import RecordItem from './RecordItem';
import styled from 'styled-components';

const RecordListContainer = styled.div`
  margin-top: 6rem;

  .count {
    width: 90rem;
    margin: auto;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    text-align: center;
    text-decoration-color: #edd7af;
    text-decoration-line: underline;
    text-decoration-thickness: 6px;
  }
`;

const RecordList = ({ recordList }) => {
  console.log('recordList', recordList);
  return (
    <RecordListContainer>
      <div className="count">There's {recordList.length} Artistic Moment</div>
      <div>
        {recordList.map(item => (
          <RecordItem key={item.id} {...item} />
        ))}
      </div>
    </RecordListContainer>
  );
};

RecordList.defaultProps = {
  recordList: [],
};

export default RecordList;
