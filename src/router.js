import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Logo from './assets/mattlogow.png';

//layouts
import MainLayout from './components/main-layout';

//pages
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import News from './components/news';
import Burger from './components/burger';

export default (
  <div id="outer-container">
    <Burger />
    <main className="background" id="page-wrap">
      <Router>
        <header className="header">
            <img className="Topnav-logo" src={Logo} />
        </header>

          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/news" component={News} />
      </Router>
    </main>
  </div>
);
