import {Component} from "react";
import {FaReact} from "react-icons/fa";

class Footer extends Component{



	render(){
		return(
			<div className="footerContainer">
				<p>Using <FaReact/> React JS & Redux JS integrated with external movies data API </p>
			</div>
		)
	}
}

export default Footer