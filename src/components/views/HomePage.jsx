import React, { Component } from 'react';
import MovieList from '../MovieList';
import movieAPI from '../../Api/apiService';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };
  
  componentDidMount() {
    movieAPI.getTrendingMovies().then((response) => this.setState({ trendingMovies: [...response] }));
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MovieList items={trendingMovies} backFrom={this.props.location} />
      </>
    );
  }
}

export default HomePage;
