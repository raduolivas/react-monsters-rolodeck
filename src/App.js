import { useState, useEffect } from "react";

import "./App.css";

import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]); 
  const [title, setTitle] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [stringField, setStringField] = useState([]);

  console.log('render');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }

  const onStringChange = (event) => {
    setStringField(event.target.value);
  }

  
    

  return(
    <div className="App">
      <h1 className='app-title'> {title}</h1>
      <SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search monsters'/>
      <br />
      <SearchBox 
        className='search-box'
        onChangeHandler={onTitleChange} 
        placeholder='Set String'/>

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//        <h1 className='app-title'> Monsters app</h1>
//         <SearchBox 
//           className='search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='Search monsters'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
