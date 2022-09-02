import React from 'react';
import {
  Section,
  RecordItemContainer,
  Poster,
  Content,
  Button,
} from './RecordItem.style';
import { HeartFilled } from '@ant-design/icons/lib/icons';

const RecordItem = () => {
  return (
    <Section>
      <RecordItemContainer>
        <Poster>
          <img
            src="https://www.syu.ac.kr/wp-content/uploads/2021/04/%EC%A0%84%EC%8B%9C%ED%9A%8C-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
            alt=""
          />
        </Poster>
        <Content>
          <h4>정세윤 : A Grand Day Out</h4>
          <h2>선물같은 순간</h2>
          <div className="bottom">
            <p>2022.09.14.</p>
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
          </div>
        </Content>
        <Button>
          <button>EDIT</button>
          <button>DELETE</button>
        </Button>
      </RecordItemContainer>
    </Section>
  );
};

export default RecordItem;
