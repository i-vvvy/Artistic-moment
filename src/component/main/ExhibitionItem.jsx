import React from 'react';
import { ExhibitionItemContainer } from './ExhibitionItem.style';

const ExhibitionItem = () => {
  return (
    <ExhibitionItemContainer>
      <img
        src="https://www.syu.ac.kr/wp-content/uploads/2021/04/%EC%A0%84%EC%8B%9C%ED%9A%8C-%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
        alt=""
      />
      <h4>정세윤 : A Grand Day Out</h4>
      <p>2022.08.09 - 2022.08.28</p>
      <p>클램프갤러리</p>
    </ExhibitionItemContainer>
  );
};

export default ExhibitionItem;
