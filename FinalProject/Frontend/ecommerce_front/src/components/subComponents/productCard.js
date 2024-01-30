import {Link} from "react-router-dom";
// create card for one product
const card=(key,path,products,clickHandler,loginCheck,updateHandler,deleteHandler)=>{
	let date = products.product_date;
  let dateObj = new Date(date);
  let year=dateObj.getFullYear();
  let month=dateObj.getMonth();
  let day= dateObj.getDate();
  const formattedDate = year +'-' + month + '-' + day;
  //if user is logged in he can delete or update his own product
  let crud;
  if (loginCheck) {
    crud=  <div data-buttonid={products.product_id} className="crud-buttons ">
              <button  onClick={updateHandler} className="btn btn-warning btn-sm">Update</button>
              <button onClick={deleteHandler} className="btn btn-danger btn-sm mx-2">Delete</button>
            </div>
  }
  //CARD HTML
  return (
  <div key={key} className="user-products">
    {crud}
    <Link to={path} data-id={products.product_id} onClick={clickHandler} className="card" key={products.id} >
        <div className="img-card">
          <img src={products.img1} className="img-thumbnail" alt="" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{products.price} Azn</h3>
          <h5 className="card-title">{products.product_name}</h5>
          <p className="card-text">{products.product_description}</p>
        </div>
        <div className="card-footer">
          <p>{formattedDate}</p>
          <p>{products.city}</p>
        </div>
      </Link>
    </div>
  );
}

export default card