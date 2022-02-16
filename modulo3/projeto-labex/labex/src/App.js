import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage.js';
import {TripList} from './pages/TripList';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <TripList/>
    </div>
  );
}

export default App;
