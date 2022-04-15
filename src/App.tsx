import React, { Suspense } from 'react';
import './App.css';

import Spinner from 'assets/spinner';

import smoothscroll from 'smoothscroll-polyfill';

const Home = React.lazy(() => import('./components/Home/Home'));

const App = () => {
  smoothscroll.polyfill();

  return (
  <div className="App">
    <Suspense fallback={<Spinner />}>
      <Home />
    </Suspense>
  </div>
  )
}

export default App;
