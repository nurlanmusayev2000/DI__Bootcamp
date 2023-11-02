import React, {Component} from "react";
import { connect } from 'react-redux'
import inputAction, {setEditedItemAction} from "../redux/action";
import {setInputAction} from "../redux/action";


class TransactionForm extends Component{
constructor(props){
	super(props)
}
	handleSubmit(e){
			e.preventDefault();
			if (this.props.editField.length===1) {
			const id = this.props.inputField.findIndex((item)=>{
				return	item.FSC===this.props.editField[0].FSC
				})
				console.log("before edit submit",this.props);
				console.log("after edit submit",this.props);
				const form = new FormData(e.target);
				const getForm = Object.fromEntries(form);
				this.props.setEditedItem(id , getForm)


			}else{
				const form = new FormData(e.target);
				const getForm = Object.fromEntries(form);
				this.props.setInputAction(getForm);

			}
			const inputs = [...document.getElementsByTagName('input')];
			inputs.map((item)=>{
				return item.value=""
			})
		}




	render(){

		console.log("withiutedit",this.props);
			if (this.props.editField.length ===1) {
				document.forms.form.accountNumber.value = this.props.editField[0].accountNumber;
				document.forms.form.FSC.value = this.props.editField[0].FSC;
				document.forms.form.name.value = this.props.editField[0].name;
				document.forms.form.amount.value = this.props.editField[0].amount;

			}
			return(
		<div>
				<h1>Financial Transaction</h1>
				<form name="form" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="accountNumber" placeholder="accountNumber"  /><br />
					<input type="text" name="FSC" placeholder="FSC" /><br />
					<input type="text" name="name" placeholder="name" /><br />
					<input type="text" name="amount" placeholder="amount"/><br />
					<button type="submit">Submit</button><br />
				</form>

		</div>
				)
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		setInputAction:(data)=>dispatch(setInputAction(data)),
		setEditedItem:(idOfData , dataofData)=>dispatch(setEditedItemAction(idOfData,dataofData))
	}
}
const mapStateToProps=(state)=>{
		return{
			inputField:state.inputField,
			editField:state.editField
		}
}


export default connect(mapStateToProps , mapDispatchToProps )(TransactionForm)