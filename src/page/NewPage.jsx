import React, { useEffect, useState } from 'react';
import ConcertInfo from '../component/detail/ConcertInfo';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../redux/api';
import Editor from '../component/common/Editor';
import { useSelector } from 'react-redux';

const NewPage = () => {
  const { id } = useParams();

  const [concertInfo, setConcertInfo] = useState(null);

  const API_KEY = `61724c7344656d6d3839656170564a`;
  const getConcertInfo = async () => {
    let url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/SJWPerform/1/1/${id}`;
    let response = await api.get(url);
    const data = response.data.SJWPerform.row[0];
    setConcertInfo(data);
  };

  useEffect(() => {
    getConcertInfo();
  }, []);

  const getRecordList = useSelector(state => state.recordList.recordList);

  console.log('list', getRecordList);

  return (
    <div>
      <ConcertInfo concertInfo={concertInfo} />
      <Editor concertInfo={concertInfo} />
    </div>
  );
};

export default NewPage;
