import React from 'react';
import PostListing from './post-listing';

var request = new XMLHttpRequest();
request.open('GET', 'content', true);

var data = [];

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    /*
    Parse the files out form the webservers directory listing.
    */

    var dummyElement = document.createElement('dummy');
    dummyElement.innerHTML = this.response;

    var files = dummyElement.querySelectorAll('ul#files li a')
    for (let f of files) {
      let name = f.querySelector('.name').innerHTML
      if (name == '..') {
        continue;
      }

      let date = f.querySelector('.date').innerHTML
      data.push({"title": name, "date": date});
    }

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





