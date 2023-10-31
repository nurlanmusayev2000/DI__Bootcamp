

const setInputAction = (accNumber,fs,name ,amnt) =>{

			return{
					type:"ADD_DETAIL",
					payload:{
					accountNumber:accNumber,
					FSC:fs,
					name:name,
					amount:amnt
				}
			}


}

export default setInputAction