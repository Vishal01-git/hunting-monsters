import React, { Component } from 'react';
import { CardList } from './components/card-lists/card-list.component';
import './App.css';
import { Search } from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state={ 
      monsters:[],
      searchField:""
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
}
  render(){

   const { monsters, searchField } = this.state;
   const filteredMonsters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
   ); 

    return(
      <div className="App">
        <h1>Hunting Monster</h1>
        <Search 
        placeholder = 'search monsters'
        handleChange={e => this.setState({searchField:e.target.value})}
        />   
        <CardList monsters = {filteredMonsters}></CardList>
    </div>
    );
  }
}

export default App;
