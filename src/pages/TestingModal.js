import React, { useEffect, Component } from 'react';
import picture from '../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovies, searchMovies } from '../redux';
import Modal from 'react-modal';

class UserMovies extends Component {
  // ({ fetchMovies, movies, title }) => {
  //   useEffect(() => {
  //     fetchMovies();
  //   }, [fetchMovies]);
//   const { fetchMovies, movies, title } = this.props;
state = {
    isOpen: false
}
  componentWillMount() {
    this.props.fetchMovies()
  }
   toggle  = () =>{
    this.setState({isOpen:!this.state.isOpen})
   }

  render() {
   
    return (
      <div>
        <Modal isOpen={this.state.isOpen}>{ (this.props.movies[0].Title)} 
        <div> Hello</div>
        <button onClick = {this.toggle}>Toggle</button>
        </Modal>
        <button onClick = {this.toggle}>Toggle Modal</button>
        <div className='col s12 m8 l8 '>
          {this.props.title && <h3 className='center'>Favorite Movies</h3>}
          <div className='row'>
            {this.props.movies ? (
              this.props.movies.map((el, index) => {
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
                      <button className='btn waves-effect waves-light commend'>Commend</button>
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
