import React from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const data = {
    text: <h2>Product name</h2>,
    text1: <p>Price <br /> qty :</p>
  }
  return (
    <div className="App">
      <div className="c1"> <Counter initialValue={0} props={data} /></div>
      <div className="c3"> <Counter initialValue={0} props={data} /></div>
      <div className="c2"> <Counter initialValue={0} props={data} /></div>
      <div className="c4"> <Counter initialValue={0} props={data} /></div>
    
    </div>
  );
}

export default App;