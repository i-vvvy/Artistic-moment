import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
  font-family: 'Cuprum', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Yrsa', serif;
  font-family: 'PT Serif', serif;
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
  input, textarea {
    border: none;
    background: none;
    outline: none;
  }
`;

export default GlobalStyle;
