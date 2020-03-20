import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo512.png';
import { fetchMovie, addMovieToDB, addMovieToUserCollection } from '../redux';

class Modal1 extends Component {
  componentWillMount() {
    const { getMovie, imdbId } = this.props;
    getMovie(imdbId);
  }

  toggle = () => {
    const { toggle } = this.props;
    toggle();
  };

  addMovie = () => {
    const {
      addMovieToDatabase,
      addMovieToUserFavorites,
      movie,
      auth,
      imdbId
    } = this.props;
    addMovieToDatabase(movie);
    addMovieToUserFavorites(auth.uid, imdbId);
  };

  render() {
    const { auth, movie } = this.props;

    return (
      <div className="modal-background">
        <div className="card">
          <div className="right-align ">
            {auth.uid ? (
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => this.addMovie()}
              >
                add to favorites
              </button>
            ) : null}
            <div className="btn-divider" />
            <button
              className="waves-effect waves-light btn-small"
              onClick={this.toggle}
            >
              close
            </button>
          </div>

          {/* TITLE */}
          <div className=" row center-align card-header">
            <h3>{movie.Title}</h3>
          </div>
          {/* OUTER CARD CONTENT START */}

          <div className="row outerDiv">
            <div className="col l6 m6 s12 modal-image-placeholder center-align">
              <img src={movie.Poster} />
            </div>
            <div className="col l6 m6 s12 ">
              <table>
                <tbody>
                  <tr>
                    <td>Genre:</td>
                    <td>{movie.Genre}</td>
                  </tr>

                  <tr>
                    <td>Year: </td>
                    <td>{movie.Year}</td>
                  </tr>
                  <tr>
                    <td>Runtime:</td>
                    <td>{movie.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Actors:</td>
                    <td>{movie.Actors}</td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{movie.Director}</td>
                  </tr>
                  <tr>
                    <td>Writer:</td>
                    <td>{movie.Writer}</td>
                  </tr>
                  <tr>
                    <td>Awards:</td>
                    <td>{movie.Awards}</td>
                  </tr>
                  <tr>
                    <td>IMDB Rating:</td>
                    <td>{movie.imdbRating}</td>
                  </tr>
                </tbody>
              </table>
              <span className="activator waves-effect waves-light btn-large center-align wide-btn">
                Plot
              </span>
            </div>
          </div>

          {/* INACTIVE CARD CONTENT */}
          <div className="card-reveal">
            <div className="col m12 l12 s12 revealed">
              <span className="card-title grey-text text-darken-4">
                Plot
                <i className="material-icons right">close</i>
              </span>
              <p className="center-align">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMovie: imdbId => dispatch(fetchMovie(imdbId)),
    addMovieToDatabase: movie => dispatch(addMovieToDB(movie)),
    addMovieToUserFavorites: (userUID, imdbId) =>
      dispatch(addMovieToUserCollection(userUID, imdbId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal1);
