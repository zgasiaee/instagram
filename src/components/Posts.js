import React from 'react';

//component
import Post from './Post'

const Posts = () => {
 
  const n = Math.floor(Math.random() * 20) + 10

    return (
        <div>
            {
               [...Array(n)].map((index) => <Post key={index} />)
            }
        </div>
    );
};

export default Posts;