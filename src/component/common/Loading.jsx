import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingCycle = styled.div`
  width: 8rem;
  height: 8rem;
  border: 4px solid #efefef;
  border-radius: 50%;
  border-top-color: #555555;
  animation: spin 0.8s infinite ease-in-out;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCycle />
    </LoadingContainer>
  );
};

export default Loading;
