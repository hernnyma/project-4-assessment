
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
import { useState } from 'react';

import './App.css';

export default function App() {
  const [circle, setCircle] = useState("1")

  function numCircle(num) {
    console.log(num)
    setCircle(num)
  }

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector numCircle={numCircle} circle={circle}/>
        <Circles circle={circle}/>
      </main>
    </div>
);
}