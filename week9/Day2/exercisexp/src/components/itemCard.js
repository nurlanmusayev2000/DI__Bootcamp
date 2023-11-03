import {Component} from "react";

import {deleteItemAction , editItemAction} from "../redux/action"
import {connect} from "react-redux";

class ItemCard extends Component{
	constructor(props){
		super(props)
	}
	deleteItemHandler(e){
			console.log("itemCardProps :" ,this.props);
			const id =this.props.index;
			this.props.deleteItem(id)
	}

	editItemHandler(e){
		console.log("itemCardProps :" ,this.props);
		const id =this.props.index;
		this.props.editItem(id);


	}
	render(){
		return(
			<tr >
					<td>{this.props.item.accountNumber}</td>
					<td>{this.props.item.FSC}</td>
					<td>{this.props.item.amount}</td>
					<td>{this.props.item.name}</td>
					<td><button onClick={this.editItemHandler.bind(this)}>Edit</button></td>
					<td><button onClick={this.deleteItemHandler.bind(this)}>Delete</button></td>
			</tr>
		)
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		deleteItem:(item)=>dispatch(deleteItemAction(item)),
		editItem:(item)=>{dispatch(editItemAction(item))}
	}
}
const mapStateToProps=(state)=>{
	return{
			inputField:state.inputField,

	}
}

export default connect(mapStateToProps ,mapDispatchToProps)(ItemCard)