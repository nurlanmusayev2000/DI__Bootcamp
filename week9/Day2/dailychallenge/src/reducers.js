import { robots } from "./robots";
const initialState = {
	searchField:"",
	robots:robots,
	searchingRobots:[]
};

	export const searchRobots=(state=initialState , action)=>{
		switch (action.type) {
			case "CHANGE_SEARCH_FIELD":
				const filteredRobots=state.robots.filter((robot)=>robot.name.toLowerCase().includes(state.searchField.toLowerCase()))

				return {...state , searchField:action.payload ,searchingRobots:[...filteredRobots] }


			default:
				return state;
		}
	}
