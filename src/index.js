import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Feed from './FeedComponent';
import Tweet from './TweetComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            tweet: '',
            feed: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleTweet = this.handleTweet.bind(this);
        this.handleFeed = this.handleFeed.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.handleFeed();
    }

    handleSubmit (e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/twitter', {
            username: this.state.username,
            tweet: this.state.tweet,
          })
          .then( (response) => {
            console.log(response);
            this.handleFeed();
          })
          .catch( (error) => {
            console.log(error);
        });


        document.getElementById('username').value = null;
        document.getElementById('tweet').value = null;
        
    }

    handleUsername (e) {
        this.setState({ username: e.target.value });
    }

    handleTweet (e) {
        this.setState({ tweet: e.target.value });
    }

    handleFeed () {
        axios.get('http://127.0.0.1:3000/twitter')
        .then( (response) => {
            console.log(response);
            this.setState({feed: response.data});
        })
        .catch( (error) => {
            console.log(error);
        });
    }
    
    render () {
      return (
      <div className='container'>
        <h1>Twitter</h1>
        <form>
            < Tweet handleUsername={this.handleUsername.bind(this)} handleTweet={this.handleTweet.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
            < Feed feed={this.state.feed}/>
        </form>
      </div>
      )}
  }
  ReactDOM.render(< App />, document.getElementById('root'));