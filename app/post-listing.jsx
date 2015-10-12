import React from 'react';
import Post from './post';
import { Link } from 'react-router';
import * as Helper from './helper';

class PostListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
    this.loadFiles();
  }

  loadFiles() {
    var request = new XMLHttpRequest();
    request.open('GET', '/content/', true);

    var that = this;
    request.onload = function() {
      if (this.status == 200) {
        // Parse the files out form the webservers directory listing.
        var dummyElement = document.createElement('dummy');
        dummyElement.innerHTML = this.response;

        var f = [];
        let files = dummyElement.querySelectorAll('ul#files li a')
        for (var i = 0; i < files.length; i++) {
          let name = files[i].querySelector('.name').innerHTML

          if (name.slice( -3 ) != '.md') {
            continue;
          }

          let rawDate = files[i].querySelector('.date').innerHTML
          let date = Helper.formatDate(rawDate)
          var title = Helper.transformFilename(name)
          f.push({"filename": name, "title": title, "rawDate": rawDate,"date": date});
        }
        that.setState({files: f});

      } else {
          console.log("error repsone");
      }
    };
    request.onerror = function() {
      console.log("something went wrong")
    };

    request.send();
  }

  render() {
    var previewNodes = this.state.files.map(f => {
      return (
        <li key={f.filename}><Link to={'post/' + f.filename}>{f.title}</Link> {f.date}</li>
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
