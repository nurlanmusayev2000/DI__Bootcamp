import React from "react";
import {connect} from "react-redux";
import {fetchAutoSearch, searchData} from "../redux/actions";

const searchFields=(props)=>{


	const searchCity=(e)=>{
		e.preventDefault()
		const input=document.searchForm.searchInput.value;
		props.searchData(input)
		props.fetchData(input)
	}


	return(

	<>
		<form name="searchForm" onSubmit={searchCity}>
			<input type="text" name="searchInput" />
			<input  type="submit" />
		</form>

</>
	)
}

const mapDispatchToProps=(dispatch)=>{

 return	{searchData: (data)=>dispatch(searchData(data)),
				fetchData:(data)=>dispatch(fetchAutoSearch(data))
}
}

const mapStateToProps=(state)=>{
	return {searchState:state.searchField,
	autoComplete:state.locationAutoComplete,
	currentWeather:state.getCurrentWeather,
	Day5Forecast:state.Day5Forecast
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(searchFields)