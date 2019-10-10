import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import Home from './components/home';

import './styles/index.css';
import './styles/app.css';
import './styles/normalize.css';
import './styles/skeleton.css';

//import MainLayout from './components/main-layout';

ReactDOM.render(Router, document.getElementById('root'));
