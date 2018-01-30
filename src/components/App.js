import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const App = props => (
  <div className="main-app">
    <main className="main-content">
      {props.children}
    </main>
  </div>
);

App.propTypes = propTypes;

export default App;
