import img1 from '../imgs/img1.jpeg'

const Navbar=()=>{



	return(
		<div className="navbar">
			<div className="left-side">

				<div className='myimage'><img src={img1} alt="" /></div>
				<div className='name-in-navbar'>Nurlan Musayev</div>
			</div>
			<div className="right-side">
				<a href="#Home">Home</a>
				<a href="#aboutme">About</a>
				<a href="#projects">Project</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	)
}

export default Navbar
