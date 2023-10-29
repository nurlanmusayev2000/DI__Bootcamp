import React from "react";
import data from "./data";


function Card(){

const handleCard = (e)=>{
 console.log(e.target.parentElement);
}

return(
	console.log(data.superheroes),
	data.superheroes.map((item)=>{
		return(
		<div className="card" key={item.id} onClick={handleCard}>
		<img src={item.image} alt="" className="card-img-top" />
		<div className="card-body">
			<h5 className="card-title">{item.name}</h5>
			<p className="card-text">{item.occupation}</p>
		</div>
	</div>)
	})

)
}


export default Card