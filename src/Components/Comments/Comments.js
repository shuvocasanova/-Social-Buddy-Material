import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = (props) => {

    const id = props.id;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;