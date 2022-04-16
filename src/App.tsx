import React from 'react';
import './App.css';

import smoothscroll from 'smoothscroll-polyfill';

const Home = React.lazy(() => import('./components/Home/Home'));

const App = () => {
  smoothscroll.polyfill();

  return <Home />;
};

export default App;
