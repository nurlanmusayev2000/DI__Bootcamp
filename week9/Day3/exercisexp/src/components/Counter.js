import React, {Component} from "react";
import {connect} from 'react-redux'
import {decrement, increment} from "../redux/actions";

class Counter extends Component{

	oddIcrementHandler(e){
		if (this.props.countValue%2 ===1) {
			this.props.increaseCount()
		}else{
			return this.props.countValue
		}

	}


	render(){
		return(
			<div className="container">
				<span>Clicked:{this.props.countValue} times</span>
				<button className="plusClick" onClick={this.props.increaseCount}>+</button>
				<button onClick={this.props.decreaseCount}>-</button>
				<button onClick={this.oddIcrementHandler.bind(this)}>increment if odd</button>
				<button>increment asynch</button>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		countValue:state.count
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		increaseCount: ()=>(dispatch(increment())),
		decreaseCount: ()=>(dispatch(decrement()))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)