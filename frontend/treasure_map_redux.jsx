import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store'; //need to create this file
import App from './components/app'; //need to create this file

const Root = ({ store }) => {
  return (<Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>);
};

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(); //potentially give this preloadedState with frontend auth
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root); //need to make root.html file for StaticPagesController
});