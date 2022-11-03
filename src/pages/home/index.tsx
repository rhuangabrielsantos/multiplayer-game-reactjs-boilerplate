import React from 'react';
import styled from 'styled-components';

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>Multiplayer Game with React.js Boilerplate</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;
