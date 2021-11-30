import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import Form from './components/Form'
import axios from 'axios';



class App extends React.Component {
  state= {
      currentUser: "justinpeisker",
      user: {},
      followers: []
    }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(res => {
      this.setState({
        ...this.state,
        user: res.data
      });
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user){
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
    } 
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
        currentUser: e.target.value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  }
  
  render() {


    return(<div>
      <h1> GITHUB INFO </h1>
      <Form handleChange= {this.handleChange} handleSubmit= {this.handleSubmit}/>
      <User user= {this.state.user}/>
      <FollowerList followers= {this.state.followers}/>
    </div>);
  }
}

export default App;
