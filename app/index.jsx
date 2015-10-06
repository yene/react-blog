import React from 'react';
import PostListing from './post-listing';

var data = [
  {author: "Pete Hunt", title: "title 1", body: "This is one comment", date: "today"},
  {author: "Jordan Walke", title: "title 2", body: "This is *another* comment", date: "yesterday"}
];


React.render(
  <PostListing data={data}/>,
  document.getElementById('listing')
);
