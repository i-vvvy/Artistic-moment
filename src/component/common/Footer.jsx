import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../styles/container.style';

const Section = styled.div`
  height: 10rem;
  margin-top: 8rem;
  border-top: 1px solid #777777;
  /* background-color: pink; */
`;

const FooterContainer = styled(PageWrapper)`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1px solid #777777;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <Section>
      <FooterContainer>
        <p>
          아티스틱모먼트 | 사업자등록번호: 111-00-00000 | 대표자: 이미미 |
          대구광역시 달성군 다사읍 매곡로 11길 1 | 대표번호: 1711-1004 | 이메일:
          cs@artisticmoment.com
        </p>
        <p>
          개인정보 보호 책임자: 이미미 | 호스팅 서비스 사업자: Aws |
          통신판매업신고: 제 2022-대구달성-1070 호 (사업자정보확인) |
          개인정보처리방침 | 이용약관
        </p>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
