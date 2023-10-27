import React, {Component} from "react"
import data from "./data.json"

const SocialMedias=data.SocialMedias.map((item)=>(
	<p>{item}</p>
))

const Skills=data.Skills[0].SkillSet.map((item)=>(
	<p>{item.Name}  </p>
))

class Example1 extends Component{


	render(){
	return(
		<div className="text-center fw-bold">{SocialMedias}</div>
	)
	}



}

class Example2 extends Component{


	render(){
	return(
		<div className="text-center fw-bold">{Skills}</div>
	)
	}



}


export {Example1 , Example2}