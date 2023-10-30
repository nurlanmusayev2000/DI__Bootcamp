import data from "../data/data";
import store from "../store/store";
import detailAction from "../action/action";

const MovieList=()=>{


	function detailClickHandler(e){
		console.log(store.getState())
				const target = e.target.previousSibling.innerText;
				 const selectedMovie	= data.find((item)=>{
					return item.title ===target;
				});
				store.dispatch(
					{
						type:"MOVIE_DETAIL",
						payload:{
							title:selectedMovie.title,
							date:selectedMovie.releaseDate,
							rate:selectedMovie.rating
						}
					}
				)
				console.log(store.getState())



	}


	return(
			<div className="listOfMovie">
					<h1>Movie List</h1>

					{
						data.map((item)=>{
						return(<div key={item.releaseDate} className="movieItem">
								<p>{item.title}</p>
								<button onClick={detailClickHandler}>details</button>
								</div>)
						})
					}

			</div>
	)

}


export default MovieList