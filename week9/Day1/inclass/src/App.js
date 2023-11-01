import React, { Component } from "react";
import "./App.css";

import Header from './components/Header';
import Goods from './components/Goods';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <main className="app__main">
          <div className="app__goods">
            <Goods />
          </div>
          <div className="app__cart">
            <Cart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;