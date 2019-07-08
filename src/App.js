import React from 'react';
import './App.css';
import store from './store';

import Page from './Components/Page';
import { createWsConnection } from './actions';

store.dispatch(createWsConnection());

function App() {
  return <Page />;
}

export default App;
