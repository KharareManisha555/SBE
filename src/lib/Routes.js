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

const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/" exact strict component={ Caraousel } /> 
  </div>
);


function Routes() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ WebLayout } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Routes;