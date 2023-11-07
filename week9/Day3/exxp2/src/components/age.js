import {React , Component} from "react";
import {connect} from "react-redux";
import {agedown, ageup} from "../redux/action";

class Age extends Component{




	render(){
		return(
			<div className="container">
				<p>Your age : {this.props.age}</p>
				<div className="buttons">
					<button onClick={()=>this.props.ageup(this.props.age)}>Age Up</button>
					<button onClick={()=>this.props.agedown(this.props.age)}>Age Down</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		age:state.age
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		ageup:(data)=>{
			dispatch(ageup(data))
		},
		agedown:(data)=>{
			dispatch(agedown(data))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Age)