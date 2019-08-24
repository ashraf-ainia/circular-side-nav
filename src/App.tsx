import React, { useState } from 'react';

import './App.css';
import menueImage from './assets/images/nav.png';
import happy from './assets/images/happy.png';
import sad from './assets/images/sad2.png';
import angry from './assets/images/angry.png';
import mustaches from './assets/images/mustaches.png';

import CircularSideNav from './components/CircularSideNav/CircularSideNav';

function App() {
  const [state, setState] = useState(
    {
      elements: [
        <img className='change-color-sad' src={sad} />,
        <img className='change-color-angry' src={angry} />,
        <img className='change-color-happy' src={happy} />,
        <img className='change-color-mustaches' src={mustaches} />,
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#CCF' }}></div>
      ],
      navSize: 15,
      animationPeriod: 0.04,
      mainCircleColor: 'gray',
      animation: ''
    }
  );

  let testImages = [
    <img className='change-color-sad' src={sad} />,
    <img className='change-color-angry' src={angry} />,
    <img className='change-color-happy' src={happy} />,
    <img className='change-color-mustaches' src={mustaches} />
  ];


  return (
    <>
      <header className='header'>
        <h1>Controls</h1>
        <button type='button' onClick={() => {
          setState({
            ...state,
            elements: [...state.elements, testImages[~~(testImages.length * Math.random())]]
          });
        }}>Add Element</button>
        <button type='button' onClick={() => {
          state.elements.pop();
        }}>Remove Element</button>
        <br />
        <button type='button' onClick={() => {
          setState({
            ...state,
            mainCircleColor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
          });
        }}>Random Menu Icon Color</button>
        <br />
        Sequesnce Elements {' '}
        <input type='checkbox' onChange={() => {
          state.animation == 'sequence' ? setState({
            ...state,
            animation: ''
          }) : setState({
            ...state,
            animation: 'sequence'
          })
        }} />
        <br />
        Sequesnce Elements Transition Period {' '}
        <input type='number' value={state.animationPeriod} onChange={(e) => {
          setState({
            ...state,
            animationPeriod: parseFloat(e.target.value)
          })
        }} />
        <br />
        Nav Size {' '}
        <input type='number' value={state.navSize} onChange={(e) => {
          setState({
            ...state,
            navSize: parseInt(e.target.value)
          })
        }} />  
      </header>
      <CircularSideNav
        backgroundImg={menueImage}
        backgroundColor={state.mainCircleColor}
        navSize={state.navSize}
        elements={state.elements}
        animation={state.animation}
        animationPeriod={state.animationPeriod}
      />
    </>
  );
}

export default App;
