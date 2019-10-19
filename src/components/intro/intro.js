import React, { Component } from "react";
import "./intro.css"


class Intro extends Component {
  render() {
    return (
      <div> 
        <div className="container artistcard ">
            <hr className="line" />
            <div className= "titleImage fade-in">
              <div className="titleImageContainer">
                <h1 className="titleImageHead">
                  Welcome to the Pop Art Showcase
                </h1>
              </div>
            </div>
            <hr className="line" />

            <h1 className="text-center introTitle">
              A site dedicated to showcasing the history of pop art.
            </h1>

            <hr className="line" />

            <h4 className="text-center ">
              2019 Nicholas Seamans 
            </h4>


            <hr className="line" />
            <hr className="line" />


        </div>

        <hr className="line" />

      </div>
    );
  }
}
export default Intro;