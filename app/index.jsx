import React from 'react';
import PostListing from './post-listing';

var request = new XMLHttpRequest();
request.open('GET', 'content', true);

var data = [];

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Parse the files out form the webservers directory listing.
    var dummyElement = document.createElement('dummy');
    dummyElement.innerHTML = this.response;

    let files = dummyElement.querySelectorAll('ul#files li a')
    for (var i = 0; i < files.length; i++) {
      let name = files[i].querySelector('.name').innerHTML
      if (name == '..') {
        continue;
      }

      let date = files[i].querySelector('.date').innerHTML
      data.push({"filename": name, "date": date});
    };


    React.render(
      <PostListing files={data}/>,
      document.getElementById('listing')
    );
  } else {
    // TODO render error msg
  }
};

request.onerror = function() {
  // TODO render error msg
};

request.send();





