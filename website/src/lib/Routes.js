import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';

import '../App.css';

import Caraousel  from '../Caraousel/Caraousel.js';
import Header     from '../Header/Header.js';
import Footer     from '../Footer/Footer.js';
import Sidebar    from '../Sidebar/Sidebar.js';
import Homepage   from '../Homepage/Homepage.js';
import Aboutus    from '../Aboutus/Aboutus.js';
import Products   from '../Products/Products.js';
import Subblock   from '../Subblock/Subblock.js';
import Contactus  from '../Contactus/Contactus.js';
import Enquiry    from '../Enquiry/Enquiry.js';
import Sitemap    from '../Sitemap/Sitemap.js';

const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/"           exact strict component={ Homepage } /> 
    <Route path="/about-us"   exact strict component={ Aboutus } /> 
    <Route path="/products"   exact strict component={ Products } /> 
    <Route path="/sbe/:url"   exact strict component={ Subblock } /> 
    <Route path="/contact-us" exact strict component={ Contactus } /> 
    <Route path="/enquiry"    exact strict component={ Enquiry } /> 
    <Route path="/sitemap"    exact strict component={ Sitemap } /> 
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