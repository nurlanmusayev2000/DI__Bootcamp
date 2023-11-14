import {connect} from "react-redux"

const Favorites = (props) => {

	const myFavs = props.favs?.map(item=>{
		return(
			<div className="weathercard">
				<h1>{item.name}</h1>
				<p>{item.degree}</p>
				<p>{item.description}</p>
			</div>
		)
	})

	return (
		<div className="fav-container">
			{myFavs}
		</div>
	)

}

const mapStateToProps=(state)=>{
		return{
			favs:state.favorites
		}
}

export default connect(mapStateToProps)(Favorites)