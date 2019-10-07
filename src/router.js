import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


//layouts
import MainLayout from './components/main-layout';

//pages
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import News from './components/news';
import Header from './components/header';

export default (
  <main className="background">
    <Header />
    <Router>
      <route component= {MainLayout}>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/news" component={News} />
      </route>
    </Router>
  </main>
);
