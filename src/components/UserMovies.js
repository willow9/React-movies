import React, { Component } from 'react';
import picture from '../images/noPicture.jpg';
import { connect } from 'react-redux';
import { fetchMovies, fetchUserMovies, searchMovies } from '../redux';
import Modal1 from '../components/Modal';
import Portal from '../components/Portal';

class UserMovies extends Component {
  // ({ fetchMovies, movies, title }) => {
  //   useEffect(() => {
  //     fetchMovies();
  //   }, [fetchMovies]);

  state = {
    isOpen: false,
    imdbId: ''
  };
  componentWillMount() {
    if (!this.props.title) {
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

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <Portal>
            <Modal1 imdbId={this.state.imdbId} toggle={this.toggle.bind(this)}></Modal1>
          </Portal>
        ) : null}
        <div className='col s12 m10 l10 '>
          {this.props.title && <h3 className='center'>Favorite Movies</h3>}
          <div className='row'>
            {this.props.movies.length > 0 ? (
              this.props.movies.map((el, index) => {
                return (
                  <div className='col s12 m3 l2' key={index}>
                    <div className='card '>
                      <div className='card-image'>
                        <img src={el.Poster != 'N/A' ? el.Poster : picture} alt='picture' />
                      </div>
                      <div className='card-content'>
                        <h6>{el.Title}</h6>
                        <hr />
                        <p>IMDB ID: {el.imdbID}</p>
                        <p>{el.Year} year</p>
                      </div>
                      <button
                        onClick={this.selectMovie}
                        className='btn waves-effect waves-light commend'
                        id={el.imdbID}
                      >
                        more info
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
    fetchUserMovies: userId => dispatch(fetchUserMovies(userId)),
    searchMovies: title => dispatch(searchMovies(title))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);

// const UserMovies = ({ fetchMovies, movies, title }) => {
//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies]);

//   const onClick = e => {
//     searchMovies('title');
//   };

//   return (
//     <div>
//       <Modal isOpen={false}>Hello from modal</Modal>
//       <div className='col s12 m8 l8 '>
//         {title && <h3 className='center'>Favorite Movies</h3>}
//         <div className='row'>
//           {movies ? (
//             movies.map((el, index) => {
//               return (
//                 <div className='col s12 m6 l3' key={index}>
//                   <div className='card '>
//                     <div className='card-image'>
//                       <img src={el.Poster} alt={picture} />
//                     </div>
//                     <div className='card-content'>
//                       <h6>{el.Title}</h6>
//                       <hr />
//                       <p>IMDB ID: {el.imdbID}</p>
//                       <p>{el.Year} year</p>
//                     </div>
//                     <button className='btn waves-effect waves-light commend'>Commend</button>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <h3 className='center'>No movies found</h3>
//           )}
//         </div>
//         <button onClick={() => onClick()}>Search</button>
//         <div className='row orange'>
//           <div className='col s12  m2'>3</div>
//           <div className='col s12  m2'>2</div>
//           <div className='col s12 m2'>4</div>
//           <div className='col s12 m2'>5</div>
//           <div className='col s12 m2'>6</div>
//           <div className='col s12 m2'>7</div>
//           <div className='col s12 m2'>8</div>
//           <div className='col s12 m2'>9</div>
//           <div className='col s12 m2'>10</div>
//           <div className='col s12 m2'>11</div>
//           <div className='col s12 m2'>12</div>
//           <div className='col s12  m2'>1</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = state => {
//   return {
//     movies: state.movieReducer.movies
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMovies: () => dispatch(fetchMovies()),
//     searchMovies: title => dispatch(searchMovies(title))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);
