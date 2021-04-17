import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

 /*
  * ////Маршрутизатор 
  */
const App = () => {
  return (
    <>
      <ul>
        <li><NavLink exact to="/" className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
        <li><NavLink to="/authors" className="NavLink" activeClassName="NavLink--active">Authors</NavLink></li>
        <li><NavLink to="/books" className="NavLink" activeClassName="NavLink--active">Books</NavLink></li>
        <li><NavLink to="/notFound" className="NavLink" activeClassName="NavLink--active">NotFound</NavLink></li>
      </ul>
    
      <Switch>
        {/* ////передаю ссилку на HomeView */}
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books" component={BooksView} />
        {/* <Route path="/notFound" component={NotFoundView} /> */}
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};
export default App;

