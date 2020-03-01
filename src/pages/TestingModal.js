import React, { useEffect, Component } from 'react';
import picture from '../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovies, searchMovies } from '../redux';
import Modal from 'react-modal';
import ModalContent from '../components/ModalContent';

class UserMovies extends Component {
  // ({ fetchMovies, movies, title }) => {
  //   useEffect(() => {
  //     fetchMovies();
  //   }, [fetchMovies]);
  //  const { fetchMovies, movies, title } = this.props;
  state = {
    isOpen: false,
    movieIndex: null,
    range: 0
  };
  componentWillMount() {
    this.props.fetchMovies();
  }
  toggle = e => {
    this.setState({ isOpen: !this.state.isOpen, movieIndex: e.target.id });
  };
  handleRangeInput = e => {
    this.setState({ range: e.target.value });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <ModalContent>
            {this.state.isOpen ? (
              <div className=' modalas-background'>
                <div className=' container row col s12 modalas-content'>
                  <div className='col s12 m4 l4 card-container1'>
                    <div className='col s12 m12 l12' key={this.state.movieIndex}>
                      <div className='card '>
                        <div className='card-image'>
                          <img src={this.props.movies[this.state.movieIndex].Poster} alt={picture} />
                        </div>
                        <div className='card-content'>
                          <h6>{this.props.movies[this.state.movieIndex].Title}</h6>
                          <hr />
                          <p>IMDB ID: {this.props.movies[this.state.movieIndex].imdbID}</p>
                          <p>{this.props.movies[this.state.movieIndex].Year} year</p>
                        </div>
                        <button
                          onClick={this.toggle}
                          className='btn waves-effect waves-light commend'
                          id={this.state.movieIndex}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='col s12 m8 l8 card-container1'>
                    <div class='row'>
                      <div class='input-field col s12'>
                        <textarea id='textarea1' class='materialize-textarea' rows='3'></textarea>
                        <label for='textarea1'>Anotation</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='input-field col s12'>
                        <textarea id='textarea2' class='materialize-textarea' rows='3'></textarea>
                        <label for='textarea2'>Rate</label>
                      </div>
                    </div>
                    <form action='#'>
                      <div className='col s12'>
                        <p className='range-field'>
                          <label htmlFor='inputId'>Rating: {this.state.range}</label>
                          <input
                            type='range'
                            id='inputId'
                            name='range'
                            value={this.state.range}
                            onChange={this.handleRangeInput}
                            min='0'
                            max='100'
                          />
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* //   </div> */}
              </div>
            ) : null}
          </ModalContent>
        </React.Fragment>
        <button onClick={this.toggle}>Toggle Modal</button>
        <div className='col s12 m8 l8 '>
          {this.props.title && <h3 className='center'>Favorite Movies</h3>}
          <div className='row'>
            {this.props.movies ? (
              this.props.movies.slice(0, 8).map((el, index) => {
                return (
                  <div className='col s12 m6 l3' key={index}>
                    <div className='card '>
                      <div className='card-image'>
                        <img src={el.Poster} alt={picture} />
                      </div>
                      <div className='card-content'>
                        <h6>{el.Title}</h6>
                        <hr />
                        <p>IMDB ID: {el.imdbID}</p>
                        <p>{el.Year} year</p>
                      </div>
                      <button onClick={this.toggle} className='btn waves-effect waves-light commend' id={index}>
                        Commend
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 className='center'>No movies found</h3>
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
    searchMovies: title => dispatch(searchMovies(title))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);
