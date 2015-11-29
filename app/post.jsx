import React from 'react';
import ReactDOM from 'react-dom';
import Marked from 'marked';
import * as Helper from './helper';
require('./post.css');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.loadFile(this.props.params.filename);
  }

  componentDidUpdate() {
    let componentDom = ReactDOM.findDOMNode(this);
    this.highlight(componentDom);
  }

  highlight(dom) {
    let domElements = dom.querySelectorAll(".markdownBody pre code");
    for (var i = 0; i < domElements.length; i++) {
      hljs.highlightBlock(domElements[i]);
    };
  }

  rawMarkdown() {
    let rawMarkup = Marked(this.state.body, {sanitize: false});
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
        <div className="markdownBody" dangerouslySetInnerHTML={this.rawMarkdown()} />
      </article>
    );
  }
}

export default Post;
