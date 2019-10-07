import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


//layouts
import MainLayout from './components/main-layout';

//pages
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import News from './components/news';
import Header from './components/header';

export default (
  <div>
    <Header />
    <MainLayout />
    <Router>
      <Route path="/" component={Home} />
      <Route path="resume" component={Resume} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="news" component={News} />
    </Router>
  </div>
);
