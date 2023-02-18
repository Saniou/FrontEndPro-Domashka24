import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import { FaBars } from 'react-icons/fa';
import VideoComp from './components/VideoComp';

function App() {
  const [ showNav, setShowNav] = useState
  (false)
  return (
    <div className="App">
      <header>
        <h1>CONTENT TITLE</h1>
        <FaBars onClick={() => setShowNav(!showNav)} />
        </header>
      <Navbar show = {showNav} />
      <VideoComp>
      <video src="./video/video1.mp4" autoPlay loop muted />
      </VideoComp>
    </div>
  );
}

export default App;
