import React from 'react';
import PostListing from './post-listing';
import Post from './post';
import { Router, Route } from 'react-router'

class NoMatch extends React.Component {
  render() {
    return (
      <p>Page not found.</p>
    )
  }
}

React.render((
  <Router>
    <Route path="/" component={PostListing} />
    <Route path="/post/:filename" component={Post} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('content'));

