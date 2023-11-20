import {TiWeatherShower} from "react-icons/ti"
import {GrFavorite} from "react-icons/gr";
import {connect} from "react-redux";
import {addFav, loading} from "../redux/actions";

const Home = (props) => {

	const addfavorites=(e)=>{
		props.addFavorites(props.autoComplete.name,props.currentWeather.main.temp,props.currentWeather.weather[0].description);
		console.log(props);
		console.log("favs",e.target.parentElement.firstElementChild.firstElementChild);
		const icon = e.target.parentElement.firstElementChild.firstElementChild;
		icon.style.backgroundColor='red'
	}
	console.log(props.loading);
if (props.Day5Forecast.length!==0 && props.currentWeather.length!==0 && props.autoComplete.length!==0) {
	console.log("girdin?");
	props.loadingData()
}

console.log(props);
if (!props.loading) {
	return(<div></div>)

}

else{
return(
	<div className="container">
					<div className="upSide">
						<div className="weatherIcon">
							<span ><TiWeatherShower/></span>
							<span>{props.autoComplete.name}: {props.currentWeather.main.temp} C</span>
						</div>
						<div className="favBtn">
							<span className="favIcon"><GrFavorite/></span>
							<button onClick={addfavorites}>Add to Favorites</button>
						</div>
					</div>
					<div className="section">
						<h1>{props.currentWeather.weather[0].description}</h1>
					</div>
					<div className="footer">
						{props.Day5Forecast.data.timelines[0].intervals.map((item,index)=>{
							let date=item.startTime
							let day = new Date().getDay()
							console.log(day)

						return	<div className="weathercard">{props.dayOfWeek[(new Date(`${date}`).getDay())]}<p> {item.values.temperature} C </p></div>
						})}
					</div>
		</div>
)}



}

const mapStateToProps=(state)=>{
	return {
		autoComplete:state.locationAutoComplete,
		currentWeather:state.getCurrentWeather,
		Day5Forecast:state.Day5Forecast,
		loading:state.loading,
		dayOfWeek:state.weekDays,
		favs:state.favorites
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		loadingData:()=>{
			dispatch(loading())
		},
		addFavorites:(dataName ,dataDegree,dataDesc)=>{
			dispatch(addFav(dataName,dataDegree,dataDesc))
		}
	}
}

export default connect(mapStateToProps ,mapDispatchToProps)(Home)