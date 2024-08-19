import React, {useState} from 'react';


const Counter = () => {

const [count, setCount] = useState(0);

const handleIncrement = () => {
  if(count<5)
  setCount(count + 1);
}; 

const handleDecrement = () => {

  if(count>-5)
  setCount(count - 1);
};


const handleReset = ()=>{
  setCount(0);
};





  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : { count }</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement} >+</button>

          <button className="btn card__btn" onClick={handleDecrement}>-</button>
          <button className="btn card__btn" onClick={handleReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;