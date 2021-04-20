import React, { Component } from 'react';

import MovieList from '../MovieList';
import routes from '../../routes';
import movieAPI from '../../Api/apiService';
import getQueryParams from '../../Api/getQueryParams';

class MoviesPage extends Component {
  state = {
    value: '',
    searchMovies: [],
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMovies(query);
      return;
    }
    this.props.history.replace({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: '',
      pathname: `${routes[1].path}`,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const { query: prevQuery } = getQueryParams(prevProp.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (!nextQuery) {
      return;
    }
    if (nextQuery !== prevQuery) {
      this.fetchMovies(nextQuery);
      return;
    }
  }

  fetchMovies = (query) => {
    movieAPI
      .getSearchMovies(query)
      .then((response) => this.setState({
        searchMovies: [...response],
        value: ''
      }))
      .catch((error) => this.setState({ error }));
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleChangeQuery = () => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${this.state.value}`,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // movieAPI.getSearchMovies(this.state.value).then((response) => this.setState({ searchMovies: [...response] }));
    if (this.state.value) {
      this.handleChangeQuery();
    }
  };

  render() {
    const { searchMovies, error } = this.state;
    
    return (
      <>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"> </span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"   //Search movies
            value={this.state.value}
            onChange={this.handleChange}
          />
          
        </form>
            {/* <button className="Button" type="submit">Search</button> */}
        
        {error
          ? (
              <div>Something wrong: {error}</div>
          )
        : (
          <MovieList items={searchMovies} backFrom={this.props.location} />
        )}
      </>
    );
  }
}

export default MoviesPage;
