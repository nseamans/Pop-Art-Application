import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./defworks.css";

class Defworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      famousWorks: []
    };
  }

  componentDidMount() {
    this.state.famousWorks = this.props.famousWorks;
  }
  render() {
    return (
      <div>
        <hr className="line" />
        <div className= "definingWorks">
          {this.props.famousWorks.map(piece => (
            <div >
              <hr />
              <h4 className="artTitle">
                {piece.artist}, {piece.title}, {piece.date}
              </h4>
              <hr className="line" />
              <img
                src={piece.image}
                className="img-thumbnail mx-auto d-block"
                width="300"
                alt={piece.title}
              />
              <hr className="line" />
            </div>
          ))}
          <hr />
        </div>
        <hr className="line" />
          
      </div>  
    );
  }
}

export default Defworks;
