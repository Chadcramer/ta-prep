import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            tweet: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleTweet = this.handleTweet.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log('submit button working');
    }

    handleUsername (e) {
        this.setState({ username: e.target.value });
    }

    handleTweet (e) {
        this.setState({ tweet: e.target.value });
    }
    
    render () {
      return (
      <div className='container'>
        <h1>Twitter</h1>
        <form>
            Username:<br />
            <input id="username" type="text" name="firstname" onChange={ this.handleUsername } />
            <br />
            Tweet:<br />
            <input id="tweet" type="text" name="lastname" onChange={ this.handleTweet }/>
            <br />
            <input type="submit" value="Submit" onClick={ this.handleSubmit } />
            <br />
            Feed 
            < hr />
        </form>
      </div>
      )}
  }
  ReactDOM.render(< App />, document.getElementById('root'));