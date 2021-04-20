import React from 'react';

import Navigation from './components/Navigation';
import Content from './components/Content';
import './styles/base.scss';

const App = () => (
  <>
    <Navigation />

    <Content />
  </>
);

export default App;






// import React, { Suspense, lazy } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import NotFoundView from './views/NotFoundView';
// import AppBar from './components/AppBar';
// import routes from './routes';

// const HomeView = lazy(() =>
//   import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
// );

// const MoviesView = lazy(() =>
//   import('./views/MoviesView.js' /* webpackChunkName: "movies-view" */),
// );

// const BooksView = lazy(() =>
//   import('./views/BooksView.js' /* webpackChunkName: "books-view" */),
// );

// const BookDetailsView = lazy(() =>
//   import(
//     './views/BookDetailsView.js' /* webpackChunkName: "book-details-view" */
//   ),
// );

// const App = () => (
//   <>
//     <AppBar />

//     <Suspense fallback={<h1>Загружаем...</h1>}>
//       <Switch>
//         <Route exact path={routes.home} component={HomeView} />
//         <Route path={routes.authors} component={AuthorsView} />
//         <Route exact path={routes.books} component={BooksView} />
//         <Route path={routes.bookDetails} component={BookDetailsView} />
//         <Route component={NotFoundView} />
//       </Switch>
//     </Suspense>
//   </>
// );

// export default App;