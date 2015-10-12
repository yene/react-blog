import React from 'react';
import Marked from 'marked';
import * as Helper from './helper';
require('./post.css');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.loadFile(this.props.params.filename);
  }

  rawMarkdown() {
    let rawMarkup = Marked(this.state.body, {sanitize: true});
    return { __html: rawMarkup };
  }

  loadFile(filename) {
    var request = new XMLHttpRequest();
    request.open('GET', '/content/' + filename, true);
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
    var title = Helper.transformFilename(this.props.params.filename);
    return (
      <article className="post">
        <header>
          <h2>{title}</h2>
        </header>
        <p dangerouslySetInnerHTML={this.rawMarkdown()} />
      </article>
    );
  }
}

export default Post;
