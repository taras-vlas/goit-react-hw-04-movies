import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Spinner from 'react-loader-spinner';
import PropTypes from 'prop-types';
import movieAPI from '../../Api/apiService';
import routes from '../../routes';

// import Cast from '../Cast';
// import Reviews from '../Reviews';

const MovieDetailsPage = ({ match, location, history }) => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const { movieId } = match.params;

  useEffect(() => {
    movieAPI.getMovieDetails(movieId).then(setMovie).catch(setError);
  }, [movieId]);

  const handleBackFrom = () => {
    if (location.state && location.state.from) {
      
      return history.push(location.state.from);
    }
    history.push(routes[0].path);
  };

  const { title = '', release_date = '', vote_average = 0, overview = '', genres = [], poster_path = '' } = movie || {};

  return movie && !error
    ? (
        <div>
                      
          <button className="back-to" onClick={handleBackFrom}>
            &#60;  back      
          </button>

          <div className="movie-details">
            {poster_path
              ? <img src={`${movieAPI.IMG_SERVER}${poster_path}`} alt="" />
              : <img src="https://via.placeholder.com/200x300.png" alt="" />
            }
            
            <div>
              <h2>{`${title} (${Number.parseInt(release_date)})`}</h2>
              <p>User Score {vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres.map(({ name }) => (
                  <span key={name}>{name}</span>
                ))}
              </p>
            </div>

          </div>
          
          <div className="additional-list">
            <h4>Additional information</h4>
            
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location?.state?.from }
                  }}
                  className="NavLink"
                  activeClassName="NavLink-active"
                >
                  Cast
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location?.state?.from }
                  }}
                    className="NavLink"
                    activeClassName="NavLink-active"
                >
                
                  Reviews
                </NavLink>
              </li>

            </ul>
          </div>

          <Suspense fallback={<Spinner type="TailSpin" color="#00BFFF" height={60} width={60} className="Spinner" />}>
            <Switch>
              <Route
                path={`${match.path}/cast`}
                component={lazy(() => import('../Cast' /* webpackChunkName: "Cast" */))} />
              <Route
                path={`${match.path}/reviews`}
                component={lazy(() => import('../Reviews' /* webpackChunkName: "Reviews" */))}
              />
            </Switch>
          </Suspense>

        </div>
      )
    : ( <div>Something wrong: {error}</div> );
};

MovieDetailsPage.propTypes = {
   genres: PropTypes.arrayOf(PropTypes.shape({
       name: PropTypes.string.isRequired,      
   })),
};  
  
export default MovieDetailsPage;
