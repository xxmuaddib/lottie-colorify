import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { colorify, flatten } from 'lottie-colorify';
import LottieSample from './LottieSample.json';
import './App.css';

function App() {
  const container = useRef();
  const containerOriginal = useRef();
  const containerFlat = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: containerFlat.current,
      animationData: flatten('#ef4efa', LottieSample),
    });

    Lottie.loadAnimation({
      container: container.current,
      animationData: colorify(
        [
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
        ],
        LottieSample,
      ),
    });

    // Basic Lottie usage
    Lottie.loadAnimation({
      container: containerOriginal.current,
      animationData: LottieSample,
    });
  }, []);



  return (
    <div className="App">
      <div className="Container">
        <div className="LottieContainer" ref={containerOriginal} />
        <div className="LottieContainer" ref={containerFlat} />
        <div className="LottieContainer" ref={container} />
      </div>
      <em>by Ged Jurga</em>
    </div>
  );
}

export default App;
