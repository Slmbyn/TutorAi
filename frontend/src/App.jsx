// App.jsx
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BinaryConvo from './Components/BinaryConvo';
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar'
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          {/* HomePage  */} {/* within homepage include components HeroSection and LessonsSection (within LessonsSection, include component for LessonCards)  */} 
          <Route path="/" element={<Homepage />} />
          <Route path="/binarysearch" element={<BinaryConvo/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
  );
}

export default App;
