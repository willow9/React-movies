import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies, clearMovies } from '../redux';

class SearchBar extends Component {
  state = {
    title: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title !== '') {
      this.props.searchMovies(this.state.title);
      this.setState({title:""})
      document.getElementById("title").value = ""
    } else {
      this.props.clearMovies()
    }
  };
  render() {
    return (
      <>
        <h3 className='center'>Search</h3>
        <form onSubmit={this.handleSubmit} class='col s10'>
          <div class='input-field col s11'>
            <input onChange={this.handleChange} id='title' type='text' class='validate' />
            <label for='title'>Title</label>
          </div>
          <div class='input-field col s1'>
            <button class='btn waves-effect waves-light' type='submit' name='action'>
              <i class='large material-icons'>search</i>
            </button>
          </div>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  console.log('hello');

  return {
    searchMovies: title => dispatch(searchMovies(title)),
    clearMovies:() => dispatch(clearMovies())
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
