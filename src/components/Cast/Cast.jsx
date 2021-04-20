import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import movieAPI from '../../Api/apiService';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    movieAPI
      .getMovieCredits(this.props.match.params.movieId)
      .then((response) => this.setState({ cast: [...response] }))
      .catch((error) => {
        this.setState({ error });
        toast.warn(`Something wrong:${error}`, { position: 'top-center' });
      });
  }

  render() {
    const { cast, error } = this.state;
    
    return (
      <ul className="cast-list">
        {error
          ? (
              <li>Something wrong: {error}</li>
            )
          : ( cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {profile_path
                  ? <img src={`${movieAPI.IMG_SERVER}${profile_path}`} alt="" />
                  : <img src="https://via.placeholder.com/200x300.png" alt="" />
                }

                <p>{name}</p>
                <span>Character:</span>
                <p>{character}</p>
              </li>
            )))
        }
      </ul>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,  
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  })),  
}
  


export default Cast;
