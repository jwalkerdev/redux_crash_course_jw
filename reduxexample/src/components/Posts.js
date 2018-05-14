import React, { Component } from 'react'

// Using fetch - https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(function() {
//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  // For React 17, move to componentDidMount() or the constructor.
  UNSAFE_componentWillMount(){
    console.log('Posts - Pre-Mount');
    // Fetch posts from jsonplaceholder test json rest api
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then( data => {this.setState({posts: data})})
      .catch(error => console.log('Error fetching posts: ' + error))
  }

  render() {
    const postItems = this.state.posts.map( post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
