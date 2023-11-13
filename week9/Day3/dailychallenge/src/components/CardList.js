import React from "react";
import Card from './Card'
import { connect } from "react-redux";
import { robotsApi, setSearchField } from "../redux/actions";
import {store} from "../redux/store";


class CardList extends React.Component{

	componentDidMount(){
		this.props.displayRobot()
	}

	render(){
	console.log("props:",this.props);
		let cardComponent ;

			if (this.props.searchingRobots.length ===0) {
				cardComponent = this.props.robot.map((user ,index)=>{
				 return(
					 <Card key={user.id} id={index} name={user.name} email={user.email}/>
				 )
			 })
		 }else{
			 cardComponent = this.props.searchingRobots.map((user ,index)=>{
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
}
const mapStateToProps = state=>{
  return{
    searchField: state.searchField,
		robot:state.robots,
		searchingRobots:state.searchingRobots
  }

}

const mapDispatchToProps = (dispatch)=>{
	return{
		displayRobot:()=>{
			dispatch(robotsApi())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps )(CardList);
