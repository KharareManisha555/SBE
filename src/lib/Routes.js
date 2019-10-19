import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';

import '../App.css';

import Caraousel from '../Caraousel/Caraousel.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Homepage from '../Homepage/Homepage.js';
import Block from '../Block/Block.js';
const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/" exact strict component={ Homepage } /> 
    <Route path="/block/:url" exact strict component={ Block } /> 
  </div>
);


function Routes() {
  return (
    <div>
      <Router>
        <Header />
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
          <Caraousel/>
          <Sidebar />
          <Switch>
            <Route path="/" component={ WebLayout } />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Routes;