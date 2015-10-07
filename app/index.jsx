import React from 'react';
import PostListing from './post-listing';
import Post from './post';
import { Router, Route, Link } from 'react-router'

    React.render(
      <PostListing />,
      document.getElementById('listing')
    );
/*
React.render((
  <Router>
    <Route path="/" component={PostListing}>
      <Route path="post" component={Post}>
        <Route path="/post/:fileName" component={Post}/>
      </Route>
    </Route>
  </Router>
),document.getElementById('listing'));

*/



