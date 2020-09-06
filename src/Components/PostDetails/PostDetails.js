import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './PostDetails.css';
import Comments from '../Comments/Comments';
import PostBody from '../PostBody/PostBody';

const PostDetails = () => {
    const {id} = useParams();

    const [ post, setPost ] = useState({});

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [pic, setPic] = useState('')

    const [name, setName] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setPic(data.results[0].picture.large);
            setName(data.results[0].name.first + ' ' + data.results[0].name.last)
        })
    }, [])

    
    return (
        <Container>
            <PostBody post={post} pic={pic} name={name}></PostBody>
            <Comments id={id}></Comments>
        </Container>
    );
};

export default PostDetails;