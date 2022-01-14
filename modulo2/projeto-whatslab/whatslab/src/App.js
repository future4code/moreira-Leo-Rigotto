import './App.css';
import { ChatField } from './components/ChatField';
import styled from 'styled-components';

const WhatsLab = styled.div`
  display: flex;
  justify-content: center;
  height: 99vh;
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
