// load all articles from HTTP listing

import React from 'react';
import PostPreview from './post-preview';

class PostListing extends React.Component {
  render() {
    return (
      <main className="postListing">
        <PostPreview author="Writer" title="title" body="asdf" date="today"/>
      </main>
    );
  }
}

export default PostListing;
