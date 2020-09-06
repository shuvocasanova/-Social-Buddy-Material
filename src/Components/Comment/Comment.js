import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import './Comment.css';

const Comment = (props) => {
    
    const { body, email } = props.comment;

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
        <div className="comment">
            <Box className="user" display="flex" flexDirection="row">
                <img src={pic} alt=""/>
                <h1 className="name" >{name}</h1>
            </Box>
            <h5>Contact: {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comment;