import logo from './logo.svg';
import react,  { Component } from "react";
import './App.css';
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox} from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [      ],
      searchField: ' '
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  filteredMonsters = () => {
    return this.state.monsters.filter((monster) => {
      return(
        monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()) || 
        monster.email.toLowerCase().includes(this.state.searchField.toLowerCase())
      );
    });
  };

  handleChange = (e) => {
   this.setState({searchField: e.target.value})
  }

  render() {
    // const {monsters, searchField} = this.state;
    // const filteredMonsters = monsters.filter(monster => {
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // 
    return(
      <div className="App">

      <h1> Kittens Rolodex </h1>
      <SearchBox 
        placeholder = 'Search Kittens'
        handlechange = {this.handleChange}
      />
      <CardList monsters={this.filteredMonsters()}/>
        
      </div>
    );
  }
}

export default App;
