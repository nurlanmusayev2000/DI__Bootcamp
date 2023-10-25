import React, {Component} from "react";
import {FaLocationDot} from  'react-icons/fa6'
import {BsPhone} from  'react-icons/bs'
import {SlEnvolopeLetter} from 'react-icons/sl'


class FootSide extends Component{




	render(){
		return(
			<footer>
				<h3 className="text-center"> Contact Us</h3>
				<div className="cont">
					<div className="leftSide">
						<p>Contact us and we will get back to you within 24 hours.</p>
						<p>	<FaLocationDot/> Company Name </p>
						<p> <BsPhone/>+256 778 800 900</p>
						<p><SlEnvolopeLetter/> company.gmail.com</p>
					</div>
					<div className="rightSide">
							<form className="d-grid">
									<label htmlFor="email">Contact</label><br />
									<input type="email" placeholder="email" /><br />
									<textarea name="comment" id="comment" cols="30" rows="10"></textarea><br />
									<button type="submit" className="btn btn-primary">Send</button>
							</form>
					</div>
				</div>

			</footer>
		)
	}
}

export default FootSide