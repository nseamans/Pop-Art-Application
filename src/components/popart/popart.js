import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "../banner/hero";
import Defworks from "./components/defworks/defworks";
import Museumlist from "./components/museumlist/museumlist";
import Summary from "./components/summary/summary";
import "./popart.css";

class Popart extends Component {
  render() {
    return (
      <div>

        <div class="container artistcard ">
            <hr className="line" />
            <Hero title= "Summary" />
            <Summary period = {this.props.popArtInfo.period} 
                     description = {this.props.popArtInfo.description} />
            <Hero title= "Defining Works" />
            <Defworks famousWorks= {this.props.popArtInfo.famousWorks} />
            <Hero title= "Museums Showing Pop Art" />
            <Museumlist museumList = {this.props.popArtInfo.museums}/>
            <hr className="line" />
        </div>
        <hr className="line" />
      </div>
    );
  }
}
export default Popart;