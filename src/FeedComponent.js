import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Feed (props) {

    return (
    <div>

        <h1>Feed</h1>
        < hr />

        <p>
            { props.feed.map((item) => { return <h3>{item.username} {item.tweet}</h3> })}
        </p>

    </div>

)}

export default Feed;