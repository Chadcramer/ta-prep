import React from 'react'
import ReactDOM from 'react-dom'

function Form ( props ) {
    return (
        <div>
         Username: <input id="username" type="text" name="username" onChange={ props.username } />
        < br />
         Tweet: <input id="tweet" type="text" name="tweet"  onChange={ props.tweet }/>
        < br />
        </div>
    )
  }

  export default Form;