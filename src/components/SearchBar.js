import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies, clearMovies } from '../redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const { findMovies, removePreviousSearchResult } = this.props;
    if (title !== '') {
      findMovies(title);
      this.setState({ title: '' });
      document.getElementById('title').value = '';
    } else {
      removePreviousSearchResult();
    }
  };

  render() {
    return (
      <>
        <h3 className="center">Search</h3>
        <form onSubmit={this.handleSubmit} className="col s10">
          <div className="input-field col s11">
            <input
              onChange={this.handleChange}
              id="title"
              type="text"
              className="validate"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s1">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="large material-icons">search</i>
            </button>
          </div>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    findMovies: title => dispatch(searchMovies(title)),
    removePreviousSearchResult: () => dispatch(clearMovies())
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
