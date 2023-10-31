import {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import { setSearchField } from './action';
import { connect } from 'react-redux';
class App extends Component{

  constructor(){
    super();
    this.state={
      robots:robots,
    }
  }



  render(){
    const {searchfield , onSearchChange} = this.props
    const filteredRobots = this.state.robots.filter((robot)=>robot.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange ={onSearchChange}/>
        <CardList robots={filteredRobots}/>

      </div>
    );
  }
}

const mapStateToProps = state=>{
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps=(dispatch)=>{
return  {onSearchChange: (event)=>(dispatch(setSearchField(event.target.value)))}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
