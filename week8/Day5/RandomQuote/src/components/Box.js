import quotes from "../data/data";
import React, {useState} from "react"


const Box = ()=>{

	const [quote , setQuote]= useState(
		quotes[(Math.floor(Math.random()*32))]
	);
	const [color,Setcolor]=useState(
		`rgb(${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))})`
	)

	const handleNext=()=>{
		setQuote(quotes[Math.floor(Math.random()*32)]	)
		let buttonColor = document.querySelector('#root');
		Setcolor(
			`rgb(${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))}, ${(Math.floor(Math.random()*255))})`
		)
		buttonColor.style.backgroundColor=color;
		document.querySelector(".quote").classList.add("animate");
		console.log()

}

	return(
			<div className="container">
				<h2 className="quote">"{quote.quote}"</h2>
				<p className="author">-{quote.author}-</p>
				<button className="nextQuote" onClick={handleNext}>New quote</button>
			</div>
		)
}

export default Box