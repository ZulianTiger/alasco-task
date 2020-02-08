import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Rectangles from './Containers/Rectangles'
import Dices from './Containers/Dices'
import CurrencyConverter from './Containers/CurrencyConverter'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Rectangles} />
          <Route exact path='/dices' component={Dices} />
          <Route exact path='/currency' component={CurrencyConverter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
