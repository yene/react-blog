import React from 'react';
import Marked from 'marked';

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
    var title = this.removeExtension(this.props.params.filename)
    title = this.removeDash(title)
    title = this.capitalize(title)

    return (
      <article className="post">
        <header>
          <h2>{title}</h2>
        </header>
        <p dangerouslySetInnerHTML={this.rawMarkdown()} />
      </article>
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
}

export default Post;
