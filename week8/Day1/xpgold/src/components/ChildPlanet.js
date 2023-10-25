import React, {Component} from "react";
import Planetler from "./Planets";

class Planetim extends Component{
	constructor(props){
		super(props);

	}

render(){
	console.log(this.props);
	return(
		<ul className="list-group ">
		{this.props.planetArr.map((item)=>{
		return(

					<li className="list-group-item">{item}</li>

		)
		})}
		</ul>
		)


}

}

export default Planetim