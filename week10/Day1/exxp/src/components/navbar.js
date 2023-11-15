import {  NavLink } from "react-router-dom";
import {TiWeatherSunny} from 'react-icons/ti'
import '../App.css'
import SearchField from "./searchField";
import {connect} from "react-redux";
const Navbar =(props)=>{



	return(
		<div className="nav">
			<h1><span><TiWeatherSunny/></span> Herolo Weather Task</h1>
			<SearchField/>
			<div className="navBtns">
			<NavLink className="button" to='/'>Home</NavLink>
			<NavLink  className="button" to='/favorites'>Favorites</NavLink>

			</div>

		</div>
	)
}

const mapStateToProps=(state)=>{
	return {searchState:state.searchField}
}

export default connect(mapStateToProps)(Navbar)