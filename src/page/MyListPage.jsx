import React from 'react';
import RecordList from '../component/myList/RecordList';
import { useSelector } from 'react-redux';
import { UserAuth } from '../context/AuthContext';

const MyListPage = () => {
  const { user } = UserAuth();
  const uid = user.uid;

  const getRecordList = useSelector(state => state.recordList.recordList);
  const userRecordList = getRecordList.filter(item => item.uid === uid);

  return (
    <div>
      <RecordList recordList={userRecordList} />
    </div>
  );
};

export default MyListPage;
