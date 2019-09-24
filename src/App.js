import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: [
        {
          name: "Toews",
          number: '19'
        },
        {
          name: "Kane",
          number: '88'
        },
        {
          name: "Debrincat",
          number: '12'
        },
      ]
    }
  }

  render(){
    return(
      <div className="App">
        {
          this.state.players.map(player => (
            <h1 key={player.number}> {player.name} </h1>

            ))
        }
      </div>
    )
  }
}

export default App;
