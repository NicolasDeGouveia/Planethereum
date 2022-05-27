import './GlobalStyles.scss';
import Navbar from './Navbar';
import Home from '../src/Pages/index';
import Dropdown from './Dropdown';
import  {useState} from 'react';
import Project from './Project';
import Background from './Background';
import Roadmap from './Roadmap';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <Background />
      <Navbar toggle={handleToggle} />
      <Dropdown isActive={isActive} toggle={handleToggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planethereum' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;
