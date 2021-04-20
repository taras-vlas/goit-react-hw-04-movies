import React, { Component } from 'react';
import movieAPI from '../../Api/apiService';
import { toast } from 'react-toastify';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    movieAPI
      .getMovieReviews(this.props.match.params.movieId)
      .then((response) => this.setState({ reviews: [...response] }))
      .catch((error) => {
        this.setState({ error });
        toast.warn(`Something wrong:${error}`, { position: 'top-center' });
      });
  }

  render() {
    const { reviews, error } = this.state;
    return reviews.length
      ? ( 
          <ul>
            {error
              ? (
                  <li>Something wrong: {error}</li>
                )
              : ( reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
                )))
            }
          </ul>
        )
      : (<p>We don't have any reviews on this movie</p>);
  }
}

export default Reviews;
