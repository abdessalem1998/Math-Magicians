import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [values, setValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const pressedButton = e.target.name;
    const updated = calculate(values, pressedButton);
    setValues(updated);
  };

  const {
    total,
    next,
    operation,
  } = values;
  return (
    <div className="grid-container">
      <div className="result">
        {!total && !next && !operation
          ? '0'
          : `${total || ''} ${operation || ''} ${next || ''}`}
      </div>
      <button name="AC" onClick={clickHandler} type="button" className="keyboard nbr">AC</button>
      <button name="+/-" onClick={clickHandler} type="button" className="keyboard nbr">+/-</button>
      <button name="%" onClick={clickHandler} type="button" className="keyboard nbr">%</button>
      <button name="÷" onClick={clickHandler} type="button" className="keyboard op">÷</button>
      <button name="7" onClick={clickHandler} type="button" className="keyboard nbr">7</button>
      <button name="8" onClick={clickHandler} type="button" className="keyboard nbr">8</button>
      <button name="9" onClick={clickHandler} type="button" className="keyboard nbr">9</button>
      <button name="x" onClick={clickHandler} type="button" className="keyboard op">×</button>
      <button name="4" onClick={clickHandler} type="button" className="keyboard nbr">4</button>
      <button name="5" onClick={clickHandler} type="button" className="keyboard nbr">5</button>
      <button name="6" onClick={clickHandler} type="button" className="keyboard nbr">6</button>
      <button name="-" onClick={clickHandler} type="button" className="keyboard op">-</button>
      <button name="1" onClick={clickHandler} type="button" className="keyboard nbr">1</button>
      <button name="2" onClick={clickHandler} type="button" className="keyboard nbr">2</button>
      <button name="3" onClick={clickHandler} type="button" className="keyboard nbr">3</button>
      <button name="+" onClick={clickHandler} type="button" className="keyboard op">+</button>
      <button name="0" onClick={clickHandler} type="button" className="keyboard item0 nbr">0</button>
      <button name="." onClick={clickHandler} type="button" className="keyboard nbr">.</button>
      <button name="=" onClick={clickHandler} type="button" className="keyboard op">=</button>
    </div>
  );
};
export default Calculator;
