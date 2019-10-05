import React from 'react';
import ReactDOM from 'react-dom';

//import Router from './components/router';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </div>
      </Router>
    );
  }
}

