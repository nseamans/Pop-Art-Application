import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./hero.css"

class Hero extends Component {
  render () {
    return (
        <div className={`heroimage`}>
            <div className="herocontainer">
                <h1 className="herotitle">
                  {this.props.title}
                </h1>  
        </div>
      </div>
    );
  }  
}

export default Hero;