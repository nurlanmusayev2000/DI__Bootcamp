import store from "../store/store"

const DetailOfMovie = ()=>{
	let result
	if(store.getState().movieDetail==='Select Movie'){
	 result=	<p>{store.getState().movieDetail}</p>
	}else{
	result=(<>
		<p>Title : {store.getState().movieDetail.title}</p>
		<p>Release Date : {store.getState().movieDetail.date}</p>
		<p>Rating :{store.getState().movieDetail.rate}</p>
		</>)
	}

return(

	<div className="detail">
	<h1>Movie</h1>
	<div>{result}</div>
	</div>
)

}

export default DetailOfMovie
