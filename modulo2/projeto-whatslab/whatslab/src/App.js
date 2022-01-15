import './App.css';
import React from 'react';
import { ChatField } from './components/ChatField';
import styled from 'styled-components';

const WhatsLab = styled.div`
  display: flex;
  justify-content: center;
  min-height: 40vh;
  max-height: 85vh;
  margin: 2px;
  `

function App() {
  return (
  <WhatsLab>
    <ChatField/>
  </WhatsLab>
  );
}

export default App;
