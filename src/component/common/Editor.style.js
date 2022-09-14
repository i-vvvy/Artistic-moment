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
  height: 44rem;
  margin-bottom: 8rem;
`;

export const Left = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 10rem;
  align-items: center;
  width: 50%;
  border-right: 1px solid #777777;

  .poster {
    width: 34rem;
    height: 44rem;
    background-color: pink;
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;

  input {
    border-bottom: 2px solid #999999;
    margin-bottom: 2.8rem;
    width: 34rem;
    font-size: 1.8rem;
    padding: 0.8rem 1.4rem;
  }

  .grade {
    font-size: 2.4rem;
    color: #999999;
    margin-top: 1rem;
  }

  button {
    margin-right: 0.8rem;
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
