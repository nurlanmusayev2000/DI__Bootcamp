const initialState = {
	searchField:"",
	robots:[],
	searchingRobots:[]
};

	export const searchRobots=(state=initialState , action)=>{
		switch (action.type) {
			case "GET_DATA":
				console.log("inside getdata");
				return {...state , robots:action.payload.roboData}

			case "CHANGE_SEARCH_FIELD":
				console.log("inside search reducer");

				const filteredRobots=state.robots.filter((robot)=>robot.name.toLowerCase().includes(state.searchField.toLowerCase()))

				return {...state , searchField:action.payload ,searchingRobots:[...filteredRobots]  }



			default:
				return state;
		}
	}
