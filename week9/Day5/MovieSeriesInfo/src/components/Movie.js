import {Component} from "react";
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'


class Movie extends Component{



	render(){
		console.log(this.props);
		const movie = this.props.movie
		return(
		<>
			<div className="movieContainer d-flex">
				<div className="imgDiv">
					<img src={movie.Poster} alt="" />
				</div>
				<div className="tableDiv">
					<h1>{movie.Title}</h1>
					<ul className="detailList ">
						<li><b>Genre:</b> {movie.Genre}</li>
						<li><b>Released:</b>{movie.Released}</li>
						<li><b>Rated:</b> {movie.Rated}</li>
						<li><b>Imdb Ratings:</b> {movie.imdbRating}</li>
						<li><b>Director:</b> {movie.Director}</li>
						<li><b>Writer:</b> {movie.Writer}</li>
						<li><b>Actors:</b> {movie.Actors}</li>
					</ul>
				</div>


			</div>
			<div className="aboutMovie">
					<h1>About</h1>
					<p>{movie.Plot}</p>
					<Link to={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" className=" m-2 btn btn-primary">View On Imdb</Link>
					<Link to="/" className="btn btn-dark"> back to Search</Link>
			</div>
		</>
			)
	}
}

const mapStateToProps=state=>{
	return{
		movie:state.movie
	}
}
export default connect(mapStateToProps)(Movie)