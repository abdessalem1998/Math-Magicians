import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
