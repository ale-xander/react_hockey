import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({players: users}))
  }

  render(){
    const {players, searchField} = this.state;
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchField.toLowerCase())
        )
    return(
      <div className="App">
        <input 
          type='search' 
          placeholder='search players' 
          onChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList players={filteredPlayers} />
         
      
      </div>
    )
  }
}

export default App;
