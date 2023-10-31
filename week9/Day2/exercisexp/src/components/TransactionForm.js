import React, {Component} from "react";
import { connect } from 'react-redux'
import inputAction from "../redux/action";
import setInputAction from "../redux/action";


class TransactionForm extends Component{
constructor(props){
	super(props)
	console.log(props);
}
handleSubmit(e){
	e.preventDefault()
	const form=document.forms.form


}

	render(){

		return(
		<div>
				<h1>Financial Transaction</h1>
				<form name="form" onSubmit={this.props.handleSubmit}>
					<input type="text" name="accountNumber" placeholder="accountNumber"/><br />
					<input type="text" name="FSC" placeholder="FSC" /><br />
					<input type="text" name="name" placeholder="name"/><br />
					<input type="text" name="amount" placeholder="amount"/><br />
					<button type="submit">Submit</button><br />
				</form>

		</div>
				)
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		handleSubmit:(e)=>{
			e.preventDefault()
			console.log(setInputAction);
			dispatch(setInputAction("salam" , "sagol","necesen","yaxshi"));

		}
	}
}
const mapStateToProps=(state)=>{
		return{
			accountNumber:state.accountNumber,
			FSC:state.fsc,
			name:state.name,
			amount:state.amount
		}
}


export default connect(mapStateToProps , mapDispatchToProps )(TransactionForm)