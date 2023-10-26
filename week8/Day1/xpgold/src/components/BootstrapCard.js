import React from "react"
import App from "../App";

const Html = (props)=>{

console.log(props.celebrities);


	return(

		props.celebrity.map((item)=>{
		return(	<div className="card m-5" style={{width: '30rem'}}>
				<img className="card-img-top" src={item.imageUrl} alt="" />
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.desription}</p>
					<a href={item.buttonUrl} class="btn btn-primary">{item.buttonLabel}</a>
				</div>
		</div>)
		})

	)
}

export default Html