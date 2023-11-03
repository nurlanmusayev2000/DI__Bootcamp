import React, { Component } from "react";
import "../App.css";
import { connect } from 'react-redux'
import { Store } from "redux";
import GoodsItem from "./Goodsitem";
import store from "../redux/store";
class Goods extends Component {


	componentDidMount(){

		const globalState = store.getState();
		this.setState({goods:globalState.goods})
	}
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{

  return{
    goods:state.goods
  }
}
const functionFromconnect = connect(mapStateToProps );
const updatedGoods = functionFromconnect(Goods)
export default updatedGoods;