import React from 'react';
import Post from './post';

class PostListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
    this.loadFiles();
  }

  loadFiles() {
    var request = new XMLHttpRequest();
    request.open('GET', 'content', true);

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
          let date = that.formatDate(rawDate)
          var title = that.removeExtension(name)
          title = that.removeDash(title)
          title = that.capitalize(title)
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

  handleClick(e) {
    e.preventDefault();
    // TODO load blog post
  }

  render() {
    var previewNodes = this.state.files.map(f => {
      return (
        <li><a href={'post/' + f.filename} onClick={this.handleClick}>{f.title}</a> {f.date}</li>
      )
    })

    return (
      <div>
      <Post filename="anoter-post.md" title="Another Post" date="1.1.2015" />
      <ul className="postListing">
        {previewNodes}
      </ul>
      </div>
    );
  }

  removeExtension(s) {
    return s.replace('.md', '')
  }

  removeDash(s) {
    return s.split('-').join(' ')
  }

  capitalize(s) {
    return s.split(' ').map( v => {
      return v.charAt(0).toUpperCase() + v.slice(1);
    }).join(' ')
  }

  formatDate(d) {
    let date = new Date(d);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + '.' + (monthIndex+1) + '.' + year
  }

}

export default PostListing;
