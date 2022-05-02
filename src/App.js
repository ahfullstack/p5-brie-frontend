import './App.css';
import './input.css'
import {Routes, Route} from 'react-router-dom'
import StatusPage from './StatusPage'
import { LandingPage } from './LandingPage';
import { Landing } from './Langin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/status" extact element={<StatusPage/>} />
        <Route path="/" extact element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;