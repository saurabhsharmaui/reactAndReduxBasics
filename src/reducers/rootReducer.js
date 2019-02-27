const initState = {
    posts: [
      {id: '1', title: 'ReactJs'},
      {id: '2', title: 'AngularJs'},
      {id: '3', title: 'View.Js'}
    ]
  }
  
  
  
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    return state;
  }
  
  export default rootReducer