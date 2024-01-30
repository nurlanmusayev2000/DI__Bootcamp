import {Link, NavLink, Outlet} from "react-router-dom"



const Navbar=()=>{


	return(<>
		<nav>
  	  <div className="nav-wrapper">
				<Link className="blogLink" to="/">My Blog</Link>
     	 <ul id="nav-mobile" className="">
      	  <li>
						<NavLink  className={({ isActive, isPending }) =>
   						 isPending ? "pending" : isActive ? "active" : ""
  						} to="/">Home</NavLink>
					</li>
    		  <li>
						<NavLink className={
							({isActive,isPending})=>isPending?"pending" : isActive ? "active" : ""
						} to="/about">About</NavLink>
					</li>
      	  <li>
						<NavLink className={
							({isActive,isPending})=>isPending?"pending" : isActive ? "active" : ""
						}  to="/contact">Contact</NavLink>
					</li>
      	</ul>
    	</div>
  	</nav>

		<Outlet/>
	</>
	)
}

export default Navbar