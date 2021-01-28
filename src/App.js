
import React from 'react';
import Navigation from './components/Navigation.jsx';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Galyna Matsygin',
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
render(){
  return (

    <Router>
      <Switch>
    <div >
    
      <Navigation/>
      
      <Route path='/about' component={About}></Route>
      <Route path='/skills' component={Skills}></Route>
      <Route path='/projects' component={Projects}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/' exact component={Main}></Route>
     
    </div>
    </Switch>
    </Router>
  );
}
}

export default App;
