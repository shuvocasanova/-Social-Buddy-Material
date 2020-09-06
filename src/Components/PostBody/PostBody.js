import React from 'react';
import { Box } from '@material-ui/core';

const PostBody = (props) => {
    const { post, pic, name } = props;
    const { title, body } = post;
    
    return (
        <Box className="post-box" style = {{backgroundColor: '#f9f6f7' , height: '20vh' , padding:'5%' , marginTop:'8px' , flex: '1'}}>
                <Box display="flex" flexDirection="row">
                    <img src={pic} alt=""/>
                    <h1 className="name">{name}</h1>
                </Box>

                
                <h3>{title}</h3>
                <p>{body}</p>
        </Box>
    );
};

export default PostBody;