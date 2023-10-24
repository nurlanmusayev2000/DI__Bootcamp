import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import './App.css'

class DemoCarousel extends Component {
  render() {
      return (
          <Carousel>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_350,h_350/cities/jrfyzvgzvhs1iylduuhj.jpg" alt='img'/>
                  <p className="legend">Hong Kong</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_350,h_350/cities/c1cklkyp6ms02tougufx.webp" alt='img'/>
                  <p className="legend">Macao</p>
              </div>
              <div>
                  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_350,h_350/cities/e8fnw35p6zgusq218foj.webp" alt='img'/>
                  <p className="legend">Japan</p>
              </div>
          </Carousel>
      );
  }
};

export default DemoCarousel