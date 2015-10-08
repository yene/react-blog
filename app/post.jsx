import React from 'react';
import Marked from 'marked';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.loadFile(this.props.filename);
  }

  rawMarkdown() {
    let rawMarkup = Marked(this.state.body, {sanitize: true});
    return { __html: rawMarkup };
  }

  loadFile(filename) {
      var request = new XMLHttpRequest();
      request.open('GET', '/content/' + filename, true);
      //request.overrideMimeType("text/html");
      var that = this;
      request.onload = function() {
        if (this.status == 200) {
          that.setState({body: this.response});
        } else {
          that.setState({body: 'Error loading Post.'});
        }
      };
      request.onerror = function() {
        that.setState({body: 'Error loading Post.'});
      };

      request.send();
  }

  render() {
    return (
      <article className="post">
        <header>
          <h2>{this.props.title}</h2>
          <p>Posted on <time>{this.props.date}</time></p>
        </header>
        <p dangerouslySetInnerHTML={this.rawMarkdown()} />
      </article>
    );
  }
}

export default Post;
