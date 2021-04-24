import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from './components/Loader';
import Container from './components/Container';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./Views/HomePage'));
const MoviesPage = lazy(() => import('./Views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Views/MovieDetailsPage'));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
