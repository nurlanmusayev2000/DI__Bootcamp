import {Component} from "react";
import { connect } from 'react-redux'
import {  Link } from "react-router-dom";
import { fetchMovieDetails} from "../redux/actions";


class MoviesContainer extends Component{


	getExactMovie(e){
		console.log("ID",e.target.id);
		this.props.addMovie(e.target.id)

	}



	render(){
		console.log(this.props);
		const cardsOfMovies= this.props.movies?.map((item,index)=>{
			return(
				<div className="card">
					<span className="d-none">{index}</span>
					<img src={item.Poster} className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">{item.Title}</h5>
          <Link onClick={this.getExactMovie.bind(this)} className="btn btn-primary" id={item.imdbID} to={`/movie/${index}`}>See Details</Link>
					</div>
  		</div>
			)
		})

		return(
			<>
				<div className="card-container">
					{cardsOfMovies}

				</div>

			</>
		)
	}
}

const mapStateToProps=(state)=>{
	return{movies:state.movies,
			movie:state.movie
	}
}
const mapDispatchToProps=dispatch=>{
	return{
		addMovie:(data)=>dispatch(fetchMovieDetails(data))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(MoviesContainer)