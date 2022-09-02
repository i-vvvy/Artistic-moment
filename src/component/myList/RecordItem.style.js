import styled from 'styled-components';

export const Section = styled.div`
  width: 92rem;
  margin: 0 auto;
  border-bottom: 1px solid #999999;
`;

export const RecordItemContainer = styled.div`
  width: 88rem;
  height: 26rem;
  display: flex;
  align-items: center;
  margin: 0 auto;

  img {
    width: 18rem;
    height: 20rem;
  }
`;

export const Poster = styled.div`
  margin-right: 8rem;
`;

export const Content = styled.div`
  h4 {
    font-size: 1.6rem;
    padding: 0.2rem;
    margin-bottom: 2.4rem;
    border-bottom: 1px solid #999999;
  }
  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .grade {
    font-size: 1.6rem;
    color: #999999;
    margin-top: 0.8rem;
  }
  button {
    margin-right: 0.4rem;
    pointer-events: none;
  }
`;

export const Button = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  button {
    border: 1px solid #777777;
    font-size: 1.4rem;
    padding: 0.4rem 1.2rem;
    margin-bottom: 1rem;
  }

  button:nth-child(2) {
    margin: 0;
  }
`;
