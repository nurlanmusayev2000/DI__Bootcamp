import {Component} from "react";
import { FaImdb, FaReact } from 'react-icons/fa';



class Navbar extends Component{



	render(){
		return(
			<div className="nav-container">
				<h1 className="navTitle">MovieSeriesInfo</h1>
				<div className="icons">
					<div className="imdbIcon"><FaImdb/></div>
					<div className="reactIcon"><FaReact/></div>
				</div>
			</div>
		)
	}
}


export default Navbar