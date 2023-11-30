import {Link} from "react-router-dom";

const card=(path,products,clickHandler,loginCheck,updateHandler,deleteHandler)=>{


console.log('insideCard' ,products);

	let date = products.product_date;
  let dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleString();
  let crud;
  if (loginCheck) {
    crud=  <div className="crud-buttons ">
              <span className="d-none">{products.product_id}</span>
              <button  onClick={updateHandler} className="btn btn-warning btn-sm">Update</button>
              <button onClick={deleteHandler} className="btn btn-danger btn-sm mx-2">Delete</button>
            </div>
  }

console.log(products);
  return (
  <div key={products.product_id} className="user-products">
    {crud}
    <Link to={path} data-id={products.id} onClick={clickHandler} className="card" key={products.id} >
        <span className="d-none">{products.product_id}</span>
        <div className="img-card">
          <img src={products.img1} alt="" />
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