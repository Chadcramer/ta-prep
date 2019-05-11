import React from 'react'
import ReactDOM from 'react-dom'

function Button ( props ) {
    return (
    <div className='message-box'>
        <input type="submit" value="Submit" onClick={ props.click } />
    </div>
    )
  }

  export default Button;