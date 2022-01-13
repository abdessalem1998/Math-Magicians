import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="result">0</div>
        <div className="keyboard nbr">AC</div>
        <div className="keyboard nbr">+/-</div>
        <div className="keyboard nbr">%</div>
        <div className="keyboard op">÷</div>
        <div className="keyboard nbr">7</div>
        <div className="keyboard nbr">8</div>
        <div className="keyboard nbr">9</div>
        <div className="keyboard op">×</div>
        <div className="keyboard nbr">4</div>
        <div className="keyboard nbr">5</div>
        <div className="keyboard nbr">6</div>
        <div className="keyboard op">-</div>
        <div className="keyboard nbr">1</div>
        <div className="keyboard nbr">2</div>
        <div className="keyboard nbr">3</div>
        <div className="keyboard op">+</div>
        <div className="keyboard item0 nbr">0</div>
        <div className="keyboard nbr">.</div>
        <div className="keyboard op">=</div>
      </div>
    );
  }
}
export default Calculator;
