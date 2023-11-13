import {Component} from "react";
import {connect} from "react-redux";

class Card extends Component{




	render(){
		console.log(this.props.card);
		const cards = this.props.card.map((item) => {
		 return  (<div key={item.title} className="card">
								<p className="card-title">{item.title}</p>
								<h1 className="card-rank">{item.rank}</h1>
							</div>)
		})

		return(
			cards
		)
	}
}

const mapStateToProps = (state)=>{

	return {card:state.card}
}

export default connect(mapStateToProps)(Card)