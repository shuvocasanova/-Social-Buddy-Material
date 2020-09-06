import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container, Typography } from '@material-ui/core';

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <Container>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </Container>
    );
};

export default Home;