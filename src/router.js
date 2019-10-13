import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//layouts
import MainLayout from './components/main-layout';

//pages
import Home from './components/home';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import News from './components/news';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home}/>
       <Route exact path="home" component={Home} />
      <Route exact path="resume" component={Resume} />
      <Route exact path="portfolio" component={Portfolio} />
      <Route exact path="news" component={News} />
    </Route>
  </Router>
)
