import React from 'react';
import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        // <Link to={{
        //         pathname:'/' + props.post.id
        //     }}>
            <article className="Post" onClick={props.clicked}>
                <h1>{props.post.title}</h1>
                <div className="Info">
                    <div className="Author">{props.post.body}</div>
                </div>
            </article>
        // </Link>
    );
};

export default post;