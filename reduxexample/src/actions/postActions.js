import { FETCH_POSTS, NEW_POST } from '../actions/types';

export function fetchPosts() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then( posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
        .catch(error => console.log('Error fetching posts: ' + error))
    }
}

// ES6 equivalent of the above exported function
// export const fetchPosts = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then( posts => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }))
//         .catch(error => console.log('Error fetching posts: ' + error))
// }

export const createPost = postData => dispatch => {
    console.log('createPost called.');
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))
    .catch(error => console.log('Error creating post: ' + error))

}
