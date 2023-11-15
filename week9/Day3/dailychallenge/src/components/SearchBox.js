import React from "react";
import {connect} from "react-redux";
import { setSearchField } from "../redux/actions";




const SearchBox = (props)=>{
	console.log("props",props);

		//const inp = document.querySelector(".searchInput").value

		//if (inp==="") {
		//	inp="all"
		//}
	return(<>
		<div className="pa2">
			<input  onChange={props.onSearchChange} className="searchInput pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" />
		</div>
		</>
	)
}





const mapStateToProps = state=>{
  console.log(state);
  return{
		 searchField: state.searchField,
		searchingRobots:state.searchingRobots
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
		onSearchChange: (e)=>dispatch(setSearchField(e.target.value)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox)