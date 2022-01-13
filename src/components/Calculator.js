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
        <button onClick={this.clickHandler} type="button" className="keyboard nbr">AC</button>
        <button type="button" className="keyboard nbr">+/-</button>
        <button type="button" className="keyboard nbr">%</button>
        <button type="button" className="keyboard op">÷</button>
        <button type="button" className="keyboard nbr">7</button>
        <button type="button" className="keyboard nbr">8</button>
        <button type="button" className="keyboard nbr">9</button>
        <button type="button" className="keyboard op">×</button>
        <button type="button" className="keyboard nbr">4</button>
        <button type="button" className="keyboard nbr">5</button>
        <button type="button" className="keyboard nbr">6</button>
        <button type="button" className="keyboard op">-</button>
        <button type="button" className="keyboard nbr">1</button>
        <button type="button" className="keyboard nbr">2</button>
        <button type="button" className="keyboard nbr">3</button>
        <button type="button" className="keyboard op">+</button>
        <button type="button" className="keyboard item0 nbr">0</button>
        <button type="button" className="keyboard nbr">.</button>
        <button type="button" className="keyboard op">=</button>
      </div>
    );
  }
}
export default Calculator;
