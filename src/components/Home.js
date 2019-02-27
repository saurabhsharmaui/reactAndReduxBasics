// import React from 'react'

// const Home = () => {


// }

// export default Home


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    // axios.get('http://jsonplaceholder.typicode.com/posts')
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       posts: res.data.slice(0, 10)
    //     })
    //   }, (err) => {
    //     console.log(err);
    //   })
  }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    console.log(posts);
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>

            <p>{post.body}</p>
          </div>
        )
      })
    ) : (
        <div>No Data found</div>
      );
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home);