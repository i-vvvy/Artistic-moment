import styled from 'styled-components';

export const Section = styled.div``;

export const ConcertInfoContainer = styled.div`
  width: 88rem;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
`;

export const Left = styled.div`
  justify-content: end;
  padding-right: 10rem;
  align-items: center;
  width: 50%;
  border-right: 1px solid #777777;
  /* background-color: pink; */

  .poster {
    width: 34rem;
    height: 44rem;
    /* background-color: pink; */
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    position: absolute;
    /* top: -1rem; */
  }
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;
  /* background-color: pink; */

  .tag {
    margin-bottom: 5rem;
    span {
      font-size: 1.2rem;
      margin-right: 1rem;
      padding: 0.4rem 1rem;
      border-radius: 5px;
      background-color: #eeeeee;
    }
  }

  h2 {
    font-size: 2.6rem;
    margin-bottom: 1.4rem;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.div`
  border: 1px solid #777777;
  font-size: 1.6rem;
  padding: 0.6rem 1.4rem;
  text-align: center;
  margin-top: 6rem;
`;
