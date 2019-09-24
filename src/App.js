import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({players: users}))
  }

  render(){
    return(
      <div className="App">
        <CardList players={this.state.players} />
         
      
      </div>
    )
  }
}

export default App;
