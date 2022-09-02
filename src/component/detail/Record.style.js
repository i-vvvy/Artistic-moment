import styled from 'styled-components';

export const Section = styled.div``;

export const EditorContainer = styled.div`
  width: 88rem;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2.6rem;
    margin: 6rem 0;
  }
`;

export const Title = styled.div`
  display: flex;
  height: 42rem;
  margin-bottom: 6rem;
`;

export const Left = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10rem;
  align-items: center;
  width: 50%;
  border-right: 1px solid #777777;

  img {
    width: 34rem;
    height: 38rem;
  }
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;

  h4 {
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .grade {
    font-size: 2.4rem;
    color: #999999;
    margin-top: 0.8rem;
  }

  button {
    margin-right: 0.8rem;
    pointer-events: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.8rem;
    line-height: 4.6rem;
    margin-bottom: 4rem;
  }

  button {
    border: 1px solid #777777;
    font-size: 1.6rem;
    padding: 0.6rem 1.4rem;
    margin-left: auto;
  }
`;
