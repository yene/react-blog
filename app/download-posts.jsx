import React from 'react';
import PostListing from './post-listing';


class DownloadPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.loadFiles();
  }
  loadFiles() {
    console.log("loading article, and converting it to markdown, async")
    this.props.files.forEach(f => {
      var request = new XMLHttpRequest();
      request.open('GET', 'content/' + f.filename, true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          console.log("success=");
          console.log(this.response);
        } else {
          console.log("error repsone");
        }
      };

      request.onerror = function() {
        console.log("something went wrong")
      };


    });


    // request files
    // convert body to markdown
    // set state, this will trigger component?

    var s = this.state.posts;
    s.push({author: "writer name", title: "a title", body: "some text", date: "today"})
    this.setState({posts: s});
  }

  render() {
    return (
      <PostListing posts={this.state.posts} />
    );
  }
}

export default DownloadPosts;
