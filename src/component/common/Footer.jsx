import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <p>
          아티스틱모먼트 | 주소: 구리시 경춘로 100-0 아티스틱모먼트 | 대표자:
          이미미 | 사업자등록번호: 111-00-00000 | 대표전화: 1711-1004 | 이메일:
          am@artisticmoment.com
        </p>
        <p className={styles.detailInfo}>
          개인정보 보호 책임자: 이미미 | 호스팅 사업자: Aws | 통신판매업신고:
          2022-경기구리-107000 <b>(사업자정보확인)</b> |{' '}
          <b>개인정보처리방침 </b>|<b> 이용약관</b>
        </p>
        <p className={styles.logo}>© ArtisticMoment</p>
      </div>
    </div>
  );
};

export default Footer;
