import {Component} from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { robotsApi } from './redux/actions';
import { connect } from 'react-redux';
import CardList from './components/CardList';
class App extends Component{

  constructor(){
    super();

  }


  render(){
    console.log("app comp",this.props);

    return (
      <div className="App tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList />

      </div>
    );
  }
}



export default connect()(App);
