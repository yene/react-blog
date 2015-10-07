import React from 'react';

class PostListing extends React.Component {
  render() {
    var previewNodes = this.props.files.map(f => {
      return (
        <li><a href={f.filename}>{f.filename} - {f.date}</a></li>
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
