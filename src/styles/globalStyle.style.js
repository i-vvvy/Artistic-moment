import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@600;700&family=Josefin+Slab:wght@600;700&family=Noto+Sans+KR:wght@300;400;500&family=Ubuntu+Condensed&family=Yrsa:ital,wght@1,500;1,600&display=swap');

*, *::before, *::after{
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-family: 'Cuprum', sans-serif;
  font-family: 'Josefin Slab', serif;
  font-family: 'Yrsa', serif;
  font-weight: 400;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 62.5%;
    width: 100%;
    color: #333333;
    margin-bottom: 0;
  }
  body{
    box-sizing: border-box;
    background-color: #f9f9f9;
  }
  ul, ol, li{
    list-style: none;
    margin-bottom: 0;
  }
  h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
