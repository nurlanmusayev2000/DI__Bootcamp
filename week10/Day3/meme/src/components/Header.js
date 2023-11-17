import img from '../Trollface.png'


const Header = ()=>{


	return(
		<div className = 'header'>
			<img src={img} alt="" />
			<p>Meme Generator</p>
		</div>
	)
}

export default Header