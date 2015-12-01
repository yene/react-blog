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

  rawMarkdown() {
    // Synchronous highlighting with highlight.js
    if (window.hljs) {
      Marked.setOptions({
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      });
    }

    var renderer = new marked.Renderer();
    renderer.heading = function (text, level) {
      var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      return '<h' + (level+1) + '><a name="' + escapedText +
             '" class="anchor" href="#' + escapedText +
             '"><span class="header-link"></span></a>' +
             text + '</h' + (level+1) + '>';
    }

    let rawMarkup = Marked(this.state.body, {sanitize: false, renderer: renderer});
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
