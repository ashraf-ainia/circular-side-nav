import React from 'react';

import './App.css';
import menueImage from "./assets/images/nav.png";
import happy from "./assets/images/happy.png";
import sad from "./assets/images/sad2.png";
import angry from "./assets/images/angry.png";
import mustaches from "./assets/images/mustaches.png";

import CircularSideNav from './Components/CircularSideNav/CircularSideNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CircularSideNav
          backgroundImg={menueImage}
          backgroundColor="gray"
          navSize={15}
          elements={[
            <img className='change-color-sad' src={sad} />,
            <img className='change-color-angry' src={angry} />,
            <img className='change-color-happy' src={happy} />,
            <img className='change-color-mustaches' src={mustaches} />,
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#CCF" }}></div>,
            <p>Text</p>,
          ]}
          animation="sequence"
          animationPeriod={0.04}
        ></CircularSideNav>
      </header>
    </div>
  );
}

export default App;
