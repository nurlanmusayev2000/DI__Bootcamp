import React, { Component } from "react";
import "../App.css";
import store from "../redux/store";
import reducer from "../redux/reducer";
import {connect} from "react-redux";

class GoodsItem extends Component {



  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={()=>this.props.addGoodToCart( id)}>Add to cart</button>
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>{
  return { addGoodToCart: (id)=>{dispatch({type:"ADD_GOOD_TO_CART" , payload:{id:id}})}}
}


export default connect(null , mapDispatchToProps)(GoodsItem)