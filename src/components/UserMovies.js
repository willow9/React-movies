import React, { Component } from 'react';
import picture from '../images/noPicture.jpg';
import { connect } from 'react-redux';
import { fetchMovies, fetchUserMovies, searchMovies } from '../redux';
import Modal1 from '../components/Modal';
import Portal from '../components/Portal';

class UserMovies extends Component {
  state = {
    isOpen: false,
    imdbId: ''
  };
  componentWillMount() {
    if (!this.props.isUserMovies) {
      this.props.fetchMovies();
    } else {
      this.props.fetchUserMovies(this.props.userId);
    }
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  selectMovie = e => {
    this.setState({ imdbId: e.target.id });
    this.setState({ isOpen: !this.state.isOpen });
  };
  setContainerSize = div => {
    if (div === 'outerDiv') {
      return this.props.containerSize === 'dashboard' ? 'col s12 m10 l10 ' : 'col s12 m8 l8';
    } else {
      return this.props.containerSize === 'dashboard' ? 'col s12 m3 l2 ' : 'col s12 m4 l3';
    }
  };

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <Portal>
            <Modal1 imdbId={this.state.imdbId} toggle={this.toggle.bind(this)}></Modal1>
          </Portal>
        ) : null}
        <div className={this.setContainerSize('outerDiv')}>
          {this.props.isUserMovies && <h3 className='center'>Favorite Movies</h3>}
          <div className='row'>
            {this.props.movies ? (
              this.props.movies.map((el, index) => {
                return (
                  <div className={this.setContainerSize('cardDiv')} key={index}>
                    <div className='card '>
                      <div className='card-image'>
                        <img src={el.Poster !== 'N/A' ? el.Poster : picture} alt='' />
                      </div>
                      <div className='card-content'>
                        <h6>{el.Title}</h6>
                        <hr />
                        <p>IMDB ID: {el.imdbID}</p>
                        <p>{el.Year} year</p>
                      </div>
                      <button
                        onClick={this.selectMovie}
                        className='btn waves-effect waves-light wide-btn'
                        id={el.imdbID}
                      >
                        more info
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h6 className='center'>No movies found.</h6>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchUserMovies: userId => dispatch(fetchUserMovies(userId)),
    searchMovies: title => dispatch(searchMovies(title))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);
