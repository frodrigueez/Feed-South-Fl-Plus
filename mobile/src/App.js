import React from 'react';
import { injectContext } from './store/store';
import RouterComponent from './routes';

function App() {
  return <RouterComponent />;
}

export default injectContext(App);;
