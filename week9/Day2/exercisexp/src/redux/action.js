

const setInputAction = (fromdatas) =>{
			return{
					type:"ADD_DETAIL",
					payload:fromdatas
			}
}

const deleteItemAction =(id)=>{
		return{
			type:"DELETE_ITEM",
			payload:id
		}
}


const editItemAction = (id)=>{
	return{	type:"EDIT_ITEM",
					payload:id}
}

const setEditedItemAction = (idOfData , dataofData)=>{
	return{	type:"SET_EDITED_ITEM",
	payload:{
		id:idOfData,
		data:dataofData
	}
}
}
export  {setInputAction , deleteItemAction,editItemAction ,setEditedItemAction}