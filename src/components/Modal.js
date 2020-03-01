import React, { Component } from 'react';
import logo from './../images/logo512.png';

export default class Modal1 extends Component {
  render() {
      console.log("is modali=");
      
      console.log(this.props);
      
    return (
      <div className='modalas-background'>
        <div class='card'>
          <div>
            Hello from portal
            <button>Untoggle</button>
          </div>

          <div class='card-image waves-effect waves-block waves-light'>
            <img class='activator' src={logo} />
          </div>
          <div class='card-content'>
            <span class='card-title activator grey-text text-darken-4'>
              Card Title<i class='material-icons right'>more_vert</i>
            </span>
            <p>
              <a href='#'>This is a link and blaljjsjdj kakakkak kakakkakakdnseuhrweu</a>
            </p>
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
