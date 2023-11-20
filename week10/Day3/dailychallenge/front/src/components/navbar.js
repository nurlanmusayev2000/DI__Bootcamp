import { Link } from "react-router-dom";


const Nav = ()=>{



	return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>

    </>
  )
};


export default Nav