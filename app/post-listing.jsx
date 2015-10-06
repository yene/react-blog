import React from 'react';
import PostPreview from './post-preview';


class PostListing extends React.Component {
  getInitialState() {
    return {posts: []};
  }
  componentDidMount() {
    console.log("loading article, and converting it to markdown, async")
    //this.props.files
    // request files
    // convert body to markdown
    // set state, this will trigger component?

    var s = this.state.posts;
    s.push({author: "writer name", title: "a title", body: "some text", date: "today"})
    this.setState({posts: s});
  }

  render() {
    var previewNodes = this.state.posts.map(post => {
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
