import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'; 

// import './js/scrollTrigger.min.js';
import Loader from './components/Loader';
import Porfolio from './components/portfolio/Porfolio';



function App() {

  

  return (
    
    <Router>
      <Switch>
        <Route exact path='/' component={Loader} />
        <Route exact path='/portfolio' component={Porfolio} />
      </Switch>
    </Router>
    
  );
}

export default App;
