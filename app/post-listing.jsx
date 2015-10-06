import React from 'react';
import PostPreview from './post-preview';


class PostListing extends React.Component {
  render() {
    var previewNodes = this.props.posts.map(post => {
      return (
        <PostPreview author={post.author} title={post.title} body={post.body} date={post.date}/>
      )
    })

    return (
      <main className="postListing">
        {previewNodes}
      </main>
    );
  }
}

export default PostListing;
