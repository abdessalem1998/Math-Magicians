import React from 'react';
import './Calculator.css';
//  import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler() {
    console.log('hi');
    console.log('this is:', this);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="result">0</div>
        <button name="AC" onClick={this.clickHandler} type="button" className="keyboard nbr">AC</button>
        <button name="+/-" type="button" className="keyboard nbr">+/-</button>
        <button name="%" type="button" className="keyboard nbr">%</button>
        <button name="÷" type="button" className="keyboard op">÷</button>
        <button name="7" type="button" className="keyboard nbr">7</button>
        <button name="8" type="button" className="keyboard nbr">8</button>
        <button name="9" type="button" className="keyboard nbr">9</button>
        <button name="×" type="button" className="keyboard op">×</button>
        <button name="4" type="button" className="keyboard nbr">4</button>
        <button name="5" type="button" className="keyboard nbr">5</button>
        <button name="6" type="button" className="keyboard nbr">6</button>
        <button name="-" type="button" className="keyboard op">-</button>
        <button name="1" type="button" className="keyboard nbr">1</button>
        <button name="2" type="button" className="keyboard nbr">2</button>
        <button name="3" type="button" className="keyboard nbr">3</button>
        <button name="+" type="button" className="keyboard op">+</button>
        <button name="0" type="button" className="keyboard item0 nbr">0</button>
        <button name="." type="button" className="keyboard nbr">.</button>
        <button name="=" type="button" className="keyboard op">=</button>
      </div>
    );
  }
}
export default Calculator;
