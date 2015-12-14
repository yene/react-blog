import React from 'react';
import ReactDOM from 'react-dom';
import PostListing from './PostListing';
import Post from './Post';
import { Router, Route } from 'react-router';

require('./normalize.css');
require('./global.css');

class NoMatch extends React.Component {
  render() {
    return (
      <p>Page not found.</p>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={PostListing} />
    <Route path="post/:filename" component={Post} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('content'));
