import React, { useEffect, useState } from 'react';
import ConcertInfo from '../component/detail/ConcertInfo';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import api from '../redux/api';
import Editor from '../component/common/Editor';
import { useSelector } from 'react-redux';

const EditPage = () => {
  const { id } = useParams();

  const [concertInfo, setConcertInfo] = useState([]);
  const [originData, setOriginData] = useState();

  const API_KEY = `61724c7344656d6d3839656170564a`;
  const getConcertInfo = async () => {
    let url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/SJWPerform/1/1/${id}`;
    let response = await api.get(url);
    const data = response.data.SJWPerform.row[0];
    setConcertInfo(data);
  };

  const recordList = useSelector(state => state.recordList.recordList);

  useEffect(() => {
    getConcertInfo();
  }, []);

  console.log(recordList);

  useEffect(() => {
    if (recordList.length >= 1) {
      const targetRecord = recordList.find(it => it.id === id);
      console.log('targetRecord', targetRecord);

      if (targetRecord) {
        setOriginData(targetRecord);
      } else {
        Navigate('/', { replace: true });
      }
    }
  }, [id, recordList]);

  return (
    <div>
      <ConcertInfo concertInfo={concertInfo} />
      {originData && (
        <Editor
          concertInfo={concertInfo}
          isEdit={true}
          originData={originData}
        />
      )}
    </div>
  );
};

export default EditPage;
