import './GlobalStyles.scss';
import Navbar from './Navbar';
import Home from '../src/Pages/index';
import Dropdown from './Dropdown';
import { useState } from 'react';
import Project from './Project';
import Background from './Background';
import Roadmap from './Roadmap';

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
      <Home />
    </>
  );
}

export default App;
