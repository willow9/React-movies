import React, { Component } from 'react';
import { connect } from 'react-redux';
import picture from '../images/noPicture.jpg';
import { fetchMovies, fetchUserMovies, searchMovies } from '../redux';
import Modal1 from './Modal';
import Portal from './Portal';

class UserMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      imdbId: ''
    };
    this.toggleModal = this.toggle.bind(this);
  }

  componentDidMount() {
    const {
      fetchAllMovies,
      fetchOnlyUserMovies,
      userId,
      isUserMovies
    } = this.props;
    if (!isUserMovies) {
      fetchAllMovies();
    } else {
      fetchOnlyUserMovies(userId);
    }
  }

  toggle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  selectMovie = e => {
    this.setState({ imdbId: e.target.id });
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  setContainerSize = divSize => {
    const { containerSize } = this.props;
    if (divSize === 'outerDiv') {
      return containerSize === 'dashboard'
        ? 'col s12 m10 l10 '
        : 'col s12 m8 l8';
    }
    return containerSize === 'dashboard' ? 'col s12 m3 l2 ' : 'col s12 m4 l3';
  };

  render() {
    const { imdbId, isOpen } = this.state;
    const { isUserMovies, movies } = this.props;
    return (
      <div>
        {isOpen ? (
          <Portal>
            <Modal1 imdbId={imdbId} toggle={this.toggleModal} />
          </Portal>
        ) : null}
        <div className={this.setContainerSize('outerDiv')}>
          {isUserMovies && <h3 className="center">Favorite Movies</h3>}
          <div className="row">
            {movies ? (
              movies.map(el => {
                return (
                  <div
                    className={this.setContainerSize('cardDiv')}
                    key={el.imdbID}
                  >
                    <div className="card ">
                      <div className="card-image">
                        <img
                          src={el.Poster !== 'N/A' ? el.Poster : picture}
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <h6>{el.Title}</h6>
                        <hr />
                        <p>
                          IMDB ID:
                          {el.imdbID}
                        </p>
                        <p>{el.Year} year</p>
                      </div>
                      <button
                        onClick={this.selectMovie}
                        className="btn waves-effect waves-light wide-btn"
                        id={el.imdbID}
                      >
                        more info
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h6 className="center">No movies found.</h6>
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
    fetchAllMovies: () => dispatch(fetchMovies()),
    fetchOnlyUserMovies: userId => dispatch(fetchUserMovies(userId)),
    findMovies: title => dispatch(searchMovies(title))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);
