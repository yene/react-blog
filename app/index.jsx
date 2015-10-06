import React from 'react';
import DownloadPosts from './download-posts';

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

    let files = dummyElement.querySelectorAll('ul#files li a')
    for (var i = 0; i < files.length; i++) {
      let name = files[i].querySelector('.name').innerHTML
      if (name != '..') {
        continue;
      }

      let date = files[i].querySelector('.date').innerHTML
      data.push({"filename": name, "date": date});
    };


    React.render(
      <DownloadPosts files={data}/>,
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





