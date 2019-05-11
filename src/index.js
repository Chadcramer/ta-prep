import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from './ButtonComponent';
import Form from './FormComponent';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            username: '',
            tweet: '',
            feed: [],
            tweetCounter: 0,
        }
        this.handlerUsernameState = this.handlerUsernameState.bind(this);
        this.handlerTweetState = this.handlerTweetState.bind(this);
        this.handlerSubmitbutton = this.handlerSubmitbutton.bind(this);
    }

    handlerUsernameState (e) {
        console.log(e.target.value);
        this.setState({username: e.target.value});
    }

    handlerTweetState (e) {
        console.log(e.target.value);
        this.setState({tweet: e.target.value});
    }

    handleGET () {
        axios.get('http://localhost:3000/tinder')
        .then( (response) => {
            console.log(response.data);
            this.setState({feed: response.data});
            this.setState({tweetCounter: this.state.feed.length});
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    handlerSubmitbutton (e) {

        e.preventDefault();

        axios.post('http://localhost:3000/tinder', {
            username: this.state.username,
            tweet: this.state.tweet,
            })
            .then( (response) => {
                this.handleGET();
            console.log("post to server was a success");
            })
            .catch( (error) => {
            console.log("error posting to server: ", error);
        })

        document.getElementById('username').value = null;
        document.getElementById('tweet').value = null;

    }

    componentDidMount() {
        this.handleGET();
    }

    render () {

      return (
        <div id='form'>
            <form>
                < Form username={ this.handlerUsernameState.bind(this) } tweet={ this.handlerTweetState.bind(this) } />
                < Button click={ this.handlerSubmitbutton.bind(this) } />
                Number of Tweets: {this.state.tweetCounter} 
            </form>
            
            { this.state.feed.map((e) => <h4> { e.username } {e.tweet} </h4> )} 

        </div>
      )}
  }

  ReactDOM.render(< App />, document.getElementById('root'));
