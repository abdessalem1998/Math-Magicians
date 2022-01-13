import React from 'react';
import './Calculator.css';
//  import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    const pressedButton = e.target.name;
    console.log(pressedButton);
    console.log('this is:', this);
  }

  render() {
    const {
      total,
      next,
      operation,
    } = this.state;
    return (
      <div className="grid-container">
        <div className="result">
          {total}
          {next}
          {operation}
        </div>
        <button name="AC" onClick={this.clickHandler} type="button" className="keyboard nbr">AC</button>
        <button name="+/-" onClick={this.clickHandler} type="button" className="keyboard nbr">+/-</button>
        <button name="%" onClick={this.clickHandler} type="button" className="keyboard nbr">%</button>
        <button name="÷" onClick={this.clickHandler} type="button" className="keyboard op">÷</button>
        <button name="7" onClick={this.clickHandler} type="button" className="keyboard nbr">7</button>
        <button name="8" onClick={this.clickHandler} type="button" className="keyboard nbr">8</button>
        <button name="9" onClick={this.clickHandler} type="button" className="keyboard nbr">9</button>
        <button name="×" onClick={this.clickHandler} type="button" className="keyboard op">×</button>
        <button name="4" onClick={this.clickHandler} type="button" className="keyboard nbr">4</button>
        <button name="5" onClick={this.clickHandler} type="button" className="keyboard nbr">5</button>
        <button name="6" onClick={this.clickHandler} type="button" className="keyboard nbr">6</button>
        <button name="-" onClick={this.clickHandler} type="button" className="keyboard op">-</button>
        <button name="1" onClick={this.clickHandler} type="button" className="keyboard nbr">1</button>
        <button name="2" onClick={this.clickHandler} type="button" className="keyboard nbr">2</button>
        <button name="3" onClick={this.clickHandler} type="button" className="keyboard nbr">3</button>
        <button name="+" onClick={this.clickHandler} type="button" className="keyboard op">+</button>
        <button name="0" onClick={this.clickHandler} type="button" className="keyboard item0 nbr">0</button>
        <button name="." onClick={this.clickHandler} type="button" className="keyboard nbr">.</button>
        <button name="=" onClick={this.clickHandler} type="button" className="keyboard op">=</button>
      </div>
    );
  }
}
export default Calculator;
