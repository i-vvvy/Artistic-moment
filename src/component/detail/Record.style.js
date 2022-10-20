import styled from 'styled-components';

export const Section = styled.div``;

export const RecordContainer = styled.div`
  width: 88rem;
  margin: 0 auto 10rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.div`
  display: flex;

  h4 {
    border-top: 2px solid #999999;
    border-bottom: 2px solid #999999;
    margin-bottom: 2.8rem;
    width: 44rem;
    font-size: 1.8rem;
    padding: 0.8rem 1.4rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 1.8rem;
    line-height: 4.6rem;
    margin-bottom: 4rem;
  }
`;

export const Button = styled.div`
  display: flex;
  margin-left: auto;

  button {
    border: 1px solid #777777;
    font-size: 1.6rem;
    padding: 0.6rem 1.4rem;
    margin-left: 1rem;
  }
`;
