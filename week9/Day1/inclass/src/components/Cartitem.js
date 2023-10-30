import React, { Component } from "react";
import "../App.css";


class CartItem extends Component {
  render() {
    const { title, price } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
      </div>
    );
  }
}

export default CartItem;