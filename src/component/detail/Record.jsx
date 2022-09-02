import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Section,
  EditorContainer,
  Title,
  Left,
  Right,
  Content,
} from './Record.style';
import { HeartFilled } from '@ant-design/icons/lib/icons';

const Record = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <Section>
      <EditorContainer>
        <h2>정세윤 : A Grand Day Out</h2>
        <Title>
          <Left>
            <img
              src="https://www.syu.ac.kr/wp-content/uploads/2021/04/%EC%A0%84%EC%8B%9C%ED%9A%8C-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
              alt=""
            />
          </Left>
          <Right>
            <h4>선물같은 순간</h4>
            <p>2022.09.22. | 클램프갤러리</p>
            <div className="grade">
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
              <button>
                <HeartFilled />
              </button>
            </div>
          </Right>
        </Title>
        <Content>
          <p>
            지난달은 어떻게 지나갔는지 모르겠다. 무더위가 한풀 꺾이니 조금
            여유가 생긴다. 마침 마음에 드는 전시를 찾았다. 지난달은 어떻게
            지나갔는지 모르겠다. 무더위가 한풀 꺾이니 조금 여유가 생긴다. 마침
            마음에 드는 전시를 찾았다. 지난달은 어떻게 지나갔는지 모르겠다.
            무더위가 한풀 꺾이니 조금 여유가 생긴다. 마침 마음에 드는 전시를
            찾았다. 지난달은 어떻게 지나갔는지 모르겠다. 무더위가 한풀 꺾이니
            조금 여유가 생긴다. 마침 마음에 드는 전시를 찾았다. 지난달은 어떻게
            지나갔는지 모르겠다. 무더위가 한풀 꺾이니 조금 여유가 생긴다. 마침
            마음에 드는 전시를 찾았다. 지난달은 어떻게 지나갔는지 모르겠다.
            무더위가 한풀 꺾이니 조금 여유가 생긴다. 마침 마음에 드는 전시를
            찾았다. 지난달은 어떻게 지나갔는지 모르겠다. 무더위가 한풀 꺾이니
            조금 여유가 생긴다. 마침 마음에 드는 전시를 찾았다.
          </p>
          <button onClick={goEdit}>EDIT</button>
        </Content>
      </EditorContainer>
    </Section>
  );
};

export default Record;
