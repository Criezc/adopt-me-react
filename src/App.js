import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const Details = lazy(() => import('./Detail'));
const SearchParams = lazy(() => import('./searchParams'));

const App = () => {
  const themeHook = React.useState('teal');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading routes...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
