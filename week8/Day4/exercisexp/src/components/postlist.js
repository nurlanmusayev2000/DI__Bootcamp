import React from "react";

const PostList=(props)=>{

return(
	props.data.map((item)=>{
	return(
		<div>
		<h1>{item.title}</h1>
		<p>{item.content}</p>
	</div>
	)
	})
)




}

export default PostList