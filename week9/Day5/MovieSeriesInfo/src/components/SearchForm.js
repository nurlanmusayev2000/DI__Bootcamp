import {Component} from "react";
import {fetchallmovies} from "../redux/actions";
import { connect } from 'react-redux'
import {FaSearch} from "react-icons/fa";

class SearchForm extends Component{

searchMovieClick(e){
	e.preventDefault();
	console.log(e.target.searchInput.value);
	const inputValue=e.target.searchInput.value;
	this.props.fetchallmovies(inputValue)
	e.target.searchInput.value=""
}

	render(){
		console.log(this.props);
		return(
			<div className="form-container">
				<p> <FaSearch/> Search for a movie ,TV series ..</p>
				<form  name="searchForm" onSubmit={this.searchMovieClick.bind(this)}>
					<input name="searchInput" type="text" />
					<input className="btn btn-primary" type="submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		searchedMovies:state.movies
	}
}
const mapDispatchToProps=(dispatch)=>{
	 return{fetchallmovies:(data)=>dispatch(fetchallmovies(data))
}}


export default connect(mapStateToProps ,mapDispatchToProps)(SearchForm)
