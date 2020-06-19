import React ,{Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';
class App extends Component {
  constructor(){
    super()
    this.state ={
      robots : robots,
      Searchfield : ''
    }
  }
 // componentDidMount(){
   // fetch('https://jsonplaceholder.typicode.com/users')
   // .then(response => response.json())
   // .then(users => this.setState({robots : users}));
  //}
    change=(event)=>{
    this.setState({Searchfield:event.target.value})
    }
  render(){
          const filterRobots=this.state.robots.filter(robots =>{
          return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
          })
         return (
         <div className = 'tc' >
         <h1 className = 'f1'>Robotics</h1>
         <SearchBox SearchChange={this.change}/>
         <Scroll>
           <Cardlist robots = {filterRobots} />
           </Scroll>
         
         </div>
           );
         }
                             }

export default App;
