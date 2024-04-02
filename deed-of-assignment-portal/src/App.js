import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/heavy" component={HeavyComponent} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
