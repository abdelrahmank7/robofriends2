import React, { Component } from 'react';
import SearchBox from '../component/SearchBox'
import CardList from '../component/CardList';
import { robots1 } from '../robots';
import './App.css';
import Scroll from '../component/Scroll'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      isLoading: true, // Declare loading state
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ 
          robots: [...robots1, ...users], // Combine static data with fetched data
          isLoading: false 
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        this.setState({ isLoading: false }); // Handle error
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value.toLowerCase() });
  }

  render() {
    const { robots, searchfield, isLoading } = this.state;
    const filteredRobots = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchfield)
    );

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
            <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
        )}
      </div>
    );
  }
}

export default App;



// import React, {Component} from 'react';
// import SearchBox from './SearchBox'
// import CardList from "./CardList.js";
// import {robots1} from './robots'
// import './App.css'

// class App extends Component{
//     constructor() {
//         super()
//         this.state = {
//             robots: [] ,
//             robots1: robots1,
//             searchfield: '',
//             isLoading: true
//         }
//     }

    
//     componentDidMount() {
//         this.urls = ['https://jsonplaceholder.typicode.com/users', robots1];
    
//         Promise.all(this.urls.map(url =>
//             fetch(url).then(res => res.json())
//         )).then(data => {
//             const combinedData = [].concat(...data);
//             this.setState({ robots: combinedData, isLoading:false  });
//         });
//     }
//     onSearchChange = ( eve ) => {
//         this.setState({searchfield: eve.target.value})
//     } 
    
    
//     render() {
//         const  filteredRobots = this.state.robots.filter(robots =>{
//             return robots.name.toLocaleLowerCase().includes(this.state.searchfield)
//         })
//         return (
//             <div className='tc'>
//                 <h1 className='f1'>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <CardList robots={filteredRobots}/>
//             </div>
//         )
//         }
//     }


// export default App;