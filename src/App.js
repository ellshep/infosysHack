import React from 'react';
import Navbar from './Menu/Navbar';
import './App.css';
import Home from './Menu/pages/Home';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blind from './Menu/pages/Blind';
import Deaf from './Menu/pages/Deaf';
import SignUp from './Menu/pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'exact component={Home} >
        </Route>
        <Route path='/'exact component={Blind} >
        <h1>Blind working</h1>
        </Route>
        <Route path='/'exact component={Deaf} >
        </Route>
        <Route path='/'exact component={SignUp}>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
