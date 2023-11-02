const increment = ()=>{
	return{
		type:"INCREMENT",
		payload:0
	}
}

const decrement = ()=>{
	return{
		type:"DECREMENT",
		payload:0
	}
}

const incrementAsync = ()=>{
	return dispatch=>{
		setTimeout(()=>{
			dispatch(increment())
		},1000)
	}
}

export {increment , decrement , incrementAsync}