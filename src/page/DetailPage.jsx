import React, { useEffect, useState } from 'react';
import ConcertInfo from '../component/detail/ConcertInfo';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../redux/api';
import Editor from '../component/common/Editor';
import Record from '../component/detail/Record';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [concertInfo, setConcertInfo] = useState(null);
  const [data, setData] = useState();

  const API_KEY = `61724c7344656d6d3839656170564a`;
  const getConcertInfo = async () => {
    let url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/SJWPerform/1/1/${id}`;
    let response = await api.get(url);
    const concertData = response.data.SJWPerform.row[0];
    setConcertInfo(concertData);
  };

  useEffect(() => {
    getConcertInfo();
  }, []);

  return (
    <div>
      <ConcertInfo concertInfo={concertInfo} />
      <Record />
    </div>
  );
};

export default DetailPage;
