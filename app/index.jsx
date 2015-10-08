import React from 'react';
import PostListing from './post-listing';
import Post from './post';

React.render(
  <div>
  <Post filename="anoter-post.md" title="Another Post" date="1.1.2015" />
  <PostListing />
  </div>,
  document.getElementById('listing')
);
