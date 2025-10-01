import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Home from './pages/Home/Home';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Home/>
      
    </div>
  )
}

export default App
