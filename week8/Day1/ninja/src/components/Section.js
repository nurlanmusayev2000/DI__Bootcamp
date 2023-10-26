import React  from "react";
import Card from "./SectionCard";
import { BsFillBuildingFill } from "react-icons/bs"
import {GiEarthAmerica} from "react-icons/gi"
import {SiHomebridge} from "react-icons/si"

//!!! component adlarini fayl adlarina uygun qeyd et
const Middle =()=>{
	const parts = [
		{
			title:"About the Company",
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			icon:<BsFillBuildingFill/>,
			imageUrl:"blablabal"

		},
		{
			title:"Our Values",
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			icon:<GiEarthAmerica/>,
			imageUrl:"blablabal"

		},
		{
			title:"Our Mission",
			desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			icon:<SiHomebridge/>,
			imageUrl:"blablabal"

		}
	]


	return(
		<Card cards={parts}/>
	)
}

export default Middle