import React from "react";
import Card from './Card'
import { connect } from "react-redux";
const CardList =(props)=>{
console.log("props:",props);
		let cardComponent ;
		if (props.searchingRobots.length ===0) {
			 cardComponent = props.robots.map((user ,index)=>{
				return(
					<Card key={user.id} id={index} name={user.name} email={user.email}/>
				)
			})
		}else{
			cardComponent = props.searchingRobots.map((user ,index)=>{
				return(
					<Card key={user.id} id={index} name={user.name} email={user.email}/>
				)
			})
		}

	return(
		<div>
				{cardComponent}
		</div>
	)
}
const mapStateToProps = state=>{
  return{
    searchField: state.searchField,
    robots: state.robots,
		searchingRobots:state.searchingRobots
  }
}
export default connect(mapStateToProps)(CardList);
