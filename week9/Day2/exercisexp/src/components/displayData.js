import {Component} from "react";
import { connect } from "react-redux";
import ItemCard from "./itemCard";

class DisplayData extends Component{
	constructor(props){
		super(props)
	}


	render(){

		return(
			<div className="dataTable">
				<table>
					<tbody>
						{
								this.props.listItems.map((item , ind)=>{
								return		<ItemCard key={ind} index = {ind} item={item}/>
							})
						}
					</tbody>
				</table>


			</div>
		)

	}
}

const mapStateToProps=(state)=>{
		return{
				listItems:state.inputField
		}
}



export default connect(mapStateToProps)(DisplayData)
