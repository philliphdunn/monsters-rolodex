import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){  // What is called after React is loaded into the DOM
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => { //lexically-scoped function that automatically binds the context of this to the App class and logs on callback
    this.setState({ searchField: e.target.value }, ()=>console.log(this.state));
  }

  render() {
    const {monsters, searchField } = this.state;  // Pulling State into constants
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters'
          handleChange = { this.handleChange }
        />
        <CardList monsters ={filteredMonsters} />
      </div>
    );
  }
}

export default App;
