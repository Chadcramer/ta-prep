import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Tweet (props) {

    return (
    <div>
        Username:<br />
            <input id="username" type="text" name="firstname" onChange={ props.handleUsername } />
            <br />
            Tweet:<br />
            <input id="tweet" type="text" name="lastname" onChange={ props.handleTweet }/>
            <br />
            <input type="submit" value="Submit" onClick={ props.handleSubmit } />
            <br />  
    </div>

)}

export default Tweet;