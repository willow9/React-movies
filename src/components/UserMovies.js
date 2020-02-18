import React from 'react';
import picture from '../images/logo512.png';

const UserMovies = () => {
  return (
    <div className='col s12 m8 l8  grey'>
      <h1 className="center">Name's Favorite Movies</h1>
      <div className='row'>
        <div className='col s12 m6 l3'>
          <div className='card '>
            <div className='card-image'>
              <img src={picture} alt='' />
              <span className='card-title'>Card Title</span>
            </div>
            <div className='card-content'>
              <p>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l3'>
          <div className='card '>
            <div className='card-image'>
              <img src={picture} alt='' />
              <span className='card-title'>Card Title</span>
            </div>
            <div className='card-content'>
              <p>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l3'>
          <div className='card '>
            <div className='card-image'>
              <img src={picture} alt='' />
              <span className='card-title'>Card Title</span>
            </div>
            <div className='card-content'>
              <p>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l3'>
          <div className='card '>
            <div className='card-image'>
              <img src={picture} alt='' />
              <span className='card-title'>Card Title</span>
            </div>
            <div className='card-content'>
              <p>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='row orange'>
        <div class='col s12  m2'>3</div>
        <div class='col s12  m2'>2</div>
        <div class='col s12 m2'>4</div>
        <div class='col s12 m2'>5</div>
        <div class='col s12 m2'>6</div>
        <div class='col s12 m2'>7</div>
        <div class='col s12 m2'>8</div>
        <div class='col s12 m2'>9</div>
        <div class='col s12 m2'>10</div>
        <div class='col s12 m2'>11</div>
        <div class='col s12 m2'>12</div>
        <div class='col s12  m2'>1</div>
      </div>
    </div>
  );
};
export default UserMovies;
