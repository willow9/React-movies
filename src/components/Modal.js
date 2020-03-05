import React, { Component } from 'react';
import logo from './../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovie, addToFavorites } from '../redux';

class Modal1 extends Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.imdbId);
  }
  toggle = () => {
    this.props.toggle();
  };

  addToFavorites = () => {
    this.props.addToFavorites(this.props.movie);
  };
  render() {
    console.log('is modali=');

    console.log(this.props);

    return (
      <div className='modalas-background'>
        <div className='card'>
          <div className='right-align '>
            {this.props.auth.uid ? (
              <button className='waves-effect waves-light btn-small' onClick={() => this.addToFavorites()}>
                add to favorites
              </button>
            ) : null}
            <div className='btn-divider'></div>
            <button className='waves-effect waves-light btn-small' onClick={this.toggle}>
              close
            </button>
          </div>

          {/* TITLE */}
          <div className=' row center-align card-title1'>
            <h3>{this.props.movie.Title}</h3>
          </div>
          {/* OUTER CARD CONTENT START*/}

          <div className='row outerDiv'>
            <div className='col l6 m6 s12 image-placeholder center-align'>
              <img src={this.props.movie.Poster} />
            </div>
            <div className='col l6 m6 s12 '>
              <table>
                <tbody>
                  <tr>
                    <td>Genre:</td>
                    <td>{this.props.movie.Genre}</td>
                  </tr>

                  <tr>
                    <td>Year: </td>
                    <td>{this.props.movie.Year}</td>
                  </tr>
                  <tr>
                    <td>Runtime:</td>
                    <td>{this.props.movie.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Actors:</td>
                    <td>{this.props.movie.Actors}</td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{this.props.movie.Director}</td>
                  </tr>
                  <tr>
                    <td>Writer:</td>
                    <td>{this.props.movie.Writer}</td>
                  </tr>
                  <tr>
                    <td>Awards:</td>
                    <td>{this.props.movie.Awards}</td>
                  </tr>
                  <tr>
                    <td>IMDB Rating:</td>
                    <td>{this.props.movie.imdbRating}</td>
                  </tr>
                </tbody>
              </table>
              <span className=' activator waves-effect waves-light btn-large center-align commend'>Plot</span>
            </div>
          </div>

          {/* INACTIVE CARD CONTENT */}
          <div className='card-reveal'>
            <div className='col m12 l12 s12'>
              <span className='card-title grey-text text-darken-4'>
                Plot<i className='material-icons right'>close</i>
              </span>
              <p className='plot-text center-align'>{this.props.movie.Plot}</p>
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
    fetchMovie: imdbId => dispatch(fetchMovie(imdbId)),
    addToFavorites: movie => dispatch(addToFavorites(movie))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal1);
