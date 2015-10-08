import React from 'react';
// TODO limit body to x chracters
// TODO format date correctly to RFC3339

class PostPreview extends React.Component {
  articlePreview() {
    // TODO brutally cut off too long text
    return this.props.body
  }

  render() {
    return (
      <article className="postPreview">
        <header>
          <h2>{this.props.title}</h2>
          <p>Posted on <time datetime="2011-04-15T16:31:24+02:00">{this.props.date}</time> by {this.props.author}</p>
        </header>
        <p>{this.articlePreview()}</p>
      </article>
    );
  }
}

export default PostPreview;