import React from "react";
import { useState } from "react";
import "./Counter.css";

export default function Counter({initialValue, props}) {
  const [counter, setCounter] = useState(initialValue);
    const handleIncrement = (value) => {
        if (counter <= 0 && value == -1) {
            setCounter(0);
        } else {
             setCounter(counter + value);
      }
   
    };
    

  return (
    <>
          
      <div className="main">
        
              <div>{props.text}</div>

              <div className="flexing">

                  <div className="price">{props.text1}</div>
                  
           <div className="buttons">
                <button onClick={() => handleIncrement(-1)}>-</button>
                  <button>{counter}</button>
                      <button onClick={() => handleIncrement(1)}>+</button>
                      </div>
              </div>

              </div>
     
    </>
  );
}