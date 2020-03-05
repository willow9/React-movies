import React, { Component } from 'react';
import logo from './../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovie } from '../redux';

class Modal1 extends Component {
  componentWillMount() {
    this.props.fetchMovie(this.props.imdbId);
  }
  toggle = () => {
    this.props.toggle();
  };
  render() {
    console.log('is modali=');

    console.log(this.props);

    return (
      <div className='modalas-background'>
        {/* <div className='container green'> */}

        <div className='card'>
          <div className='right-align '>
            {1 == 1 ? (
              <button className='waves-effect waves-light btn-small' onClick={this.toggle}>
                add to favorites
              </button>
            ) : null}
            <div className='btn-divider'></div>
            <button className='waves-effect waves-light btn-small' onClick={this.toggle}>
              close
            </button>
          </div>

          {/* TITLE */}
          {/* <div className='row'> */}
          <div className=' row center-align card-title1'>
            <h3>{this.props.movie.Title}</h3>
          </div>
          {/* </div> */}
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
                <div className='col m12 l12 s12 green'>
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
    movie: state.movieReducer.movie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: imdbId => dispatch(fetchMovie(imdbId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal1);
