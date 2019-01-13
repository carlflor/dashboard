import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppProvider } from './context.js';
import App from './views/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

const DashboardApp = () => (
  <div>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </div>
);

ReactDOM.render(<DashboardApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
