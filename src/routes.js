import { lazy } from 'react';

// import HomePage from './components/HomePage';
// import MoviesPage from './components/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage';

export default [
  {
    path: `/`,
    label: 'Home',
    isInMenu: true,
    exactRoute: true,
    exactLink: true,
    // componentRout: HomePage,
    component: lazy(() => import('./components/views/HomePage' /* webpackChunkName: "home-page" */)),
  },
  {
    path: `/movies`,
    label: 'Movies',
    isInMenu: true,
    exactRoute: true,
    exactLink: false,
    // componentRout: MoviesPage,
    component: lazy(() => import('./components/views/MoviesPage' /* webpackChunkName: "movie-page" */)),
  },
  {
    path: `/movies/:movieId`,
    label: 'Movie Details',
    isInMenu: false,
    exactRoute: false,
    exactLink: false,
    // componentRout: MovieDetailsPage,
    component: lazy(() => import('./components/views/MovieDetailsPage' /* webpackChunkName: "movie-details" */)),
  },
];







// {
//   HOME: `/`,
//   MOVIES: `/movies`,
//   MOVIE_DETAILS: `/movies/:movieId`,
// };
