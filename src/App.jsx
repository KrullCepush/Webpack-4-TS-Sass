import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '~assets/defaultStyles/style.global.scss';
import Main from "./components/main";

const App = () => {
  return (
    <Router>
      <div>hello</div>
        <Main />
    </Router>
  );
};

export { App };
