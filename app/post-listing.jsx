import React from 'react';
import { Router, Route, Link } from 'react-router'

class PostListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
    this.loadFiles();
  }

  loadFiles() {
    var request = new XMLHttpRequest();
    request.open('GET', 'content', true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        // Parse the files out form the webservers directory listing.
        var dummyElement = document.createElement('dummy');
        dummyElement.innerHTML = this.response;

        var f = [];
        let files = dummyElement.querySelectorAll('ul#files li a')
        for (var i = 0; i < files.length; i++) {
          let name = files[i].querySelector('.name').innerHTML
          if (name == '..') {
            continue;
          }
          let date = files[i].querySelector('.date').innerHTML
          var f = this.state.files;
          f.push({"filename": name, "date": date});
        }
        this.setState({files: f});

      }
    };
    request.send();
  }


  render() {
    var previewNodes = this.state.files.map(f => {
      return (
        <li key={f.filename}><Link to={`/post/${f.filename}`}>{f.filename} {f.date}</Link></li>
      )
    })

    return (
      <ul className="postListing">
        {previewNodes}
      </ul>
    );
  }
}

export default PostListing;
