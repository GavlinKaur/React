import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import UserBar from './user/UserBar';
import Post from './post/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';

function App() {
  // const user = 'Daniel';

  const [user,setUser] = useState('');

  const defaultPosts= [
    {title: 'React Hooks', content:'The greatest thing since slice Bread !', author:'Daniel'},
    {title: 'React Fragments', content:'Keeping the DOM tree clean!', author:'Daniel'}
  ]

  const [ posts, setPosts] = useState(defaultPosts);
  
  
  return (
  //  <Login></Login>
  //  <Logout user="Daniel"></Logout>
  //  <Register></Register>
  // <UserBar></UserBar>
/* <Post title="React Hooks" content="The greatest thing since slice Bread !" author ="Daniel" /> */

/* <CreatePost user="Daniel"></CreatePost> */


<div style={{padding:8}}>
  <UserBar user={user} setUser={setUser}></UserBar>
  <br/>
  { user && <CreatePost user={user} posts={posts} setPosts={setPosts}></CreatePost> }
  <br/>
  <hr/>
  <PostList posts={posts}></PostList>
</div>
  );
}

export default App;
