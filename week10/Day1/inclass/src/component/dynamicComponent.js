import {useContext} from "react"
import {DynamicContext} from "../context/DynamicContex"



const Component = ()=>{
	const sharedState = 	useContext(DynamicContext)


	return(<>
		<button onClick={sharedState.increment}>Increament</button>
          <span>{sharedState.count}</span>
       <button onClick={sharedState.decrement} >Decreament</button>
			 </>
	)
}

export default Component