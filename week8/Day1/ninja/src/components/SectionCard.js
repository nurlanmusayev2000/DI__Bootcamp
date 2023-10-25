import React from "react"
import { BsFillBuildingFill } from "react-icons/bs"
import {GiEarthAmerica} from "react-icons/gi"
import {SiHomebridge} from "react-icons/si"
const Card = (props)=>{



	return(
		props.cards.map((item)=>{
			return(
				<>
				<div className="card">
					<p></p>
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