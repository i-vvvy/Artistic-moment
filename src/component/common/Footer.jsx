import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <p>
          Artistic-Moment | 사업자등록번호: 111-00-00000 | 대표자: 이미미 |
          구리시 경춘로100-0 아티스틱모먼트 | 대표번호: 1711-1004 | 이메일:
          cs@artisticmoment.com
        </p>
        <p>
          개인정보 보호 책임자: 이미미 | 호스팅 서비스 사업자: Aws |
          통신판매업신고: 제 2022-경기구리-1070 호 (사업자정보확인) |
          개인정보처리방침 | 이용약관
        </p>
      </div>
    </div>
  );
};

export default Footer;
