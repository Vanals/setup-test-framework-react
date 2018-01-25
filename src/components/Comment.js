import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li>
      <p> Ciao Marco </p>
      <p className='comment-item'> {this.props.comment} </p>
      </li>
    )
  }
}

export default Comment;
