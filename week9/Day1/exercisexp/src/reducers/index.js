

const reducerFunction =(state , action)=>{
  switch (action.type) {
		case "INCREASE_COUNT":
			return {count:state.count+1}

		case "DECREASE_COUNT":
			return {count:state.count-1}


		case "ADD_NUM":
			return {count:state.count+action.payload}
		default:
			return state
	}

}

export default reducerFunction;