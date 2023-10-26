import React from "react"

const Card = (props)=>{



	return(
		props.cards.map((item)=>{
			// ! map etdikde key ver
			return(
				<>
				<div className="card">
					<p>{item.icon}</p>
				</div>
				<div>
						<h1>{item.title}</h1>
						<p>{item.desc}</p>
				</div>
				</>
			)
		})
	)
}


export default Card