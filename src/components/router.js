import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//layouts
import MainLayout from './main-layout';

//pages
<switch>
  <route exact path='/' component={Home}/>
</switch>
//
import Home from './home';
import Resume from './resume';
import Portfolio from './portfolio';
import News from './news';


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
