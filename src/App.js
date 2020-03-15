import React from 'react';
import logo from './logo.svg';
import {Home} from './components/Pages/Home';
import {About} from './components/Pages/About'; 
import Layout from './components/Layout';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './helpers';
import './App.css';

function App() { 
  return (
    <Layout> 
       <Router history={history}>
         <Switch>
         <Route path="/" exact component={Home} />
         {/* <Route path="/1" component={Home2} /> */}
         <Route path="/About" component={About} />
         </Switch>
      </Router>    
  
    </Layout>
  );
}

export default App;
