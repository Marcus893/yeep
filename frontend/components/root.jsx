import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import app from './app';

const Root = ({store}) => (
  <Provider store={ store }>
    <HashRouter>
      <app />
    </HashRouter>
  </Provider>
);

export default Root;
