import React, { Component } from 'react';
import logo from './../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovie, searchMovies } from '../redux';

class Modal1 extends Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.imdbId);
  }
  render() {
    console.log('is modali=');

    console.log(this.props);

    return (
      <div className='modalas-background'>
        <div class='card'>
          <div>
            <h1>Hello from portal</h1>
            <h3>{this.props.movie.Plot}</h3>
            <button>Untoggle</button>
          </div>

          <div class='card-image waves-effect waves-block waves-light'>
            <img class='activator' src={logo} />
          </div>
          <div class='card-content'>
            <span class='card-title activator grey-text text-darken-4'>
              Card Title<i class='material-icons right'>more_vert</i>
            </span>
          </div>
          <div class='card-reveal'>
            <span class='card-title grey-text text-darken-4'>
              Card Title<i class='material-icons right'>close</i>
            </span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: imdbId => dispatch(fetchMovie(imdbId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal1);
