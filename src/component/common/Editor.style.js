import styled from 'styled-components';

export const Section = styled.div``;

export const EditorContainer = styled.div`
  width: 88rem;
  margin: 0 auto 10rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.div`
  display: flex;

  input {
    border-top: 2px solid #999999;
    border-bottom: 2px solid #999999;
    margin-bottom: 2.8rem;
    width: 44rem;
    font-size: 1.8rem;
    padding: 0.8rem 1.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 88rem;
    height: 34rem;
    border-top: 2px solid #999999;
    border-bottom: 2px solid #999999;
    font-size: 1.8rem;
    padding: 1.6rem;
    margin-bottom: 4rem;
  }

  button {
    border: 1px solid #777777;
    font-size: 1.6rem;
    padding: 0.6rem 1.4rem;
    margin-left: auto;
  }
`;
