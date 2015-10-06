import React from 'react';
import PostListing from './post-listing';

var request = new XMLHttpRequest();
request.open('GET', 'posts.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    React.render(
      <PostListing data={data}/>,
      document.getElementById('listing')
    );
  } else {
    // We reached our target server, but it returned an error
    // TODO render error msg
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  // TODO render error msg
};

request.send();





