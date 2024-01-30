import Capture from '../imgs/Capture.PNG'
import Capture2 from '../imgs/Capture2.PNG'
import Capture3 from '../imgs/Capture3.PNG'



const Project=()=>{


	return(
		<div id="projects" className="projects">
			<h1>My Projects</h1>
			<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
			<div className="project-section">
				<div className="about-project">
					<h1>Ecommerce</h1>
					<p>Designed and implemented a fully functional ECommerce website from scratch, providing users with a seamless online shopping experience. Leveraged a modern tech stack, including React.js for the frontend and Node.js with Express.js for the backend. Incorporated key features such as a dynamic product catalog, user authentication, secure payment processing, and responsive design. The project highlights proficiency in frontend development, backend logic, database management with PostggreSql, and secure authentication using JSON Web Tokens (JWT). The website is accessible on various devices, showcasing an emphasis on user experience and responsive design.
					</p>
					<a href="https://drive.google.com/file/d/1z43pL-4o-0UjHqCAv5RqvuzFypgt7akQ/view?usp=drive_link" target="Blank" className="btn btn-success d-block my-2">Watch my project</a>
					<a href="https://github.com/nurlanmusayev2000/MyProject" target="Blank" className="btn btn-warning">Check Code</a>
				</div>

			</div>
			<div className="project-section">

				<div className="about-project">
					<h1>Billioner Game</h1>
					<p>
						In this project i would like to show you my abilities about Vanilla.js. It is a game from 10 question when you enter game you should add your name and e-mail adress.After you finish game you will get the score over the email.The questions are kept in database.Database was created in postgreSql and serverside over Node.js if you want about details of this game you can check my github profile
					</p>
					<a href="https://drive.google.com/file/d/17IKJfisYmAW7aGwbA5stsjGK-gV8vYLU/view?usp=drive_link" target="Blank" className="btn btn-success d-block my-2">Watch my project</a>
					<a href="https://github.com/nurlanmusayev2000/DI__Bootcamp/tree/main/hackathon2" target="Blank" className="btn btn-warning">Check Code</a>
				</div>
			</div>
			<div className="project-section">
				<div className="project-img">
					<img src={Capture3} alt="" />
				</div>
				<div className="about-project">
					<h1>Currency Converter</h1>
					<p>
						It is a simple Currecny Converter.My purpose to share this project with you is to show how to call API in the front side.
					</p>
					<a href="https://gleaming-croissant-d4ca63.netlify.app/" target="Blank" className="btn btn-warning">Check Code</a>
				</div>
			</div>
		</div>
	)
}

export default Project