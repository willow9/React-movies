import React, { useEffect } from 'react';
import picture from '../images/logo512.png';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux';

const UserMovies = ({ fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const onClick = e => {
    fetchMovies();
  };

  return (
    <div className='col s12 m8 l8  grey'>
      <h3 className='center'>Favorite Movies</h3>
      <div className='row'>
        {movies.map((el, index) => {
          return (
            <div className='col s12 m6 l3' key={index}>
              <div className='card '>
                <div className='card-image'>
                  <img src={el.Poster} alt={picture} />
                </div>
                <div className='card-content'>
                  <h6>{el.title}</h6>
          <p>{el.imdbID}</p>
                  <p>released</p>
                  <p>rating</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => onClick()}>Test</button>
      <div className='row orange'>
        <div className='col s12  m2'>3</div>
        <div className='col s12  m2'>2</div>
        <div className='col s12 m2'>4</div>
        <div className='col s12 m2'>5</div>
        <div className='col s12 m2'>6</div>
        <div className='col s12 m2'>7</div>
        <div className='col s12 m2'>8</div>
        <div className='col s12 m2'>9</div>
        <div className='col s12 m2'>10</div>
        <div className='col s12 m2'>11</div>
        <div className='col s12 m2'>12</div>
        <div className='col s12  m2'>1</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMovies);
