import {Component} from "react";
import { connect } from 'react-redux'
import {deletePost} from "../redux/action";

class Post extends Component{

	deletePost(){
		const id = this.props.chosenPost.id;
		console.log(id);
		this.props.deletePost(id)
	}

	render(){
		console.log(this.props);


		return(
			<>
				<h1>{this.props.chosenPost?.title}</h1>
				<p>{this.props.chosenPost?.body}</p>
				<button onClick={this.deletePost.bind(this)} className="deleteButton">Delete Post</button>
			</>
		)
	}
}

const mapStateToProps = (state)=>{
	 return {posts:state.posts,chosenPost:state.chosenPost}
}
const mapDispatchToProps=(dispatch)=>{
		return {deletePost:(id)=>dispatch(deletePost(id))}
}


export default connect(mapStateToProps,mapDispatchToProps)(Post)