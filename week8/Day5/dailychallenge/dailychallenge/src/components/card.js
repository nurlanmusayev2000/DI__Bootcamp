import React from "react";
import data from "./data";

// !!! tamamlanmayib
/* You need to keep track of the current score:
everytime the user clicks on a new card, he gets a point.
if the user clicks twice on the same card, the score goes back to zero.
display the best score of the user (ie. “Top Score”). */

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