import './GlobalStyles.scss';
import Navbar from './Navbar';
import Home from '../src/Pages/index';
import Dropdown from './Dropdown';
import { useState } from 'react';
import Background from './Background';
import { Routes, Route } from 'react-router-dom';

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
        <Route path='/Planethereum/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
