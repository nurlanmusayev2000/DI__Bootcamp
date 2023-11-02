import React from "react";
import {connect} from "react-redux";
import './App.css';
import { setSearchField ,checkRobotsAction } from './action';




const SearchBox = (props)=>{
	console.log("props",props);
	return(<>
		<div className="pa2">
			<input onChange={props.onSearchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" />
		</div>
		</>
	)
}





const mapStateToProps = state=>{
  console.log(state);
  return{
    searchField: state.searchField,
    robots: state.robots,
		searchingRobots:state.searchingRobots
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
		onSearchChange: (e)=>dispatch(setSearchField(e.target.value)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox)