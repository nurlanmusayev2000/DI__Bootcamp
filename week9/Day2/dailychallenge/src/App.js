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

  }


  render(){
    console.log(this.props);
    const {searchfield , onSearchChange , robots} = this.props

    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList />

      </div>
    );
  }
}

const mapStateToProps = state=>{
  console.log(state);
  return{
    searchField: state.searchField,
    robots: state.robots
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {onSearchChange: (e)=>dispatch(setSearchField(e.target.value))}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
