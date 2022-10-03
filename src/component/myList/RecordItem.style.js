import styled from 'styled-components';

export const Section = styled.div`
  width: 100rem;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
`;

export const RecordItemContainer = styled.div`
  width: 90rem;
  height: 30rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Poster = styled.div`
  width: 18rem;
  height: 22rem;
  margin-right: 8rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    position: absolute;
    top: -1rem;
  }
`;

export const Content = styled.div`
  width: 40rem;
  cursor: pointer;

  h4 {
    font-size: 1.6rem;
    padding: 0 0.2rem 1rem;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid #999999;
  }

  h2 {
    font-size: 2.2rem;
    padding-bottom: 0.8rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #999999;
  }
  p {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
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
