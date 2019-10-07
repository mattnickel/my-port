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


export default (
  <main className="background">
    <Router>
       <header className="header">
          <img className="Topnav-logo" src={Logo} />
          <nav className="Topnav">
            <ul className="Topnav-list">
              <li className= "Topnav-list-item"><Link to="/" className="active">Home</Link></li>
              <li className= "Topnav-list-item"><Link to="/Resume" activeClassName="active">Resume</Link></li>
              <li className= "Topnav-list-item"><Link to="/Portfolio" activeClassName="active">Portfolio</Link></li>
              <li className= "Topnav-list-item"><Link to="/News" activeClassName="active">News</Link></li>
            </ul>
          </nav>
        </header>

      <route component= {MainLayout}>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/news" component={News} />
      </route>
    </Router>
  </main>
);
