import React from 'react';
import RecordList from '../component/myList/RecordList';
import { useSelector } from 'react-redux';

const MyListPage = () => {
  const getRecordList = useSelector(state => state.recordList.recordList);

  return (
    <div>
      <RecordList recordList={getRecordList} />
    </div>
  );
};

export default MyListPage;
