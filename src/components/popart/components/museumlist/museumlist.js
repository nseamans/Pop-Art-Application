import React, { Component } from "react";


class Museumlist extends Component {
  render() {
    return (
      <div>
        <hr className="line" />
        {this.props.museumList.map(piece => (      
            <h5 className="museumList">
                <a className="museumListLink" href={piece.link} target="_blank">
                {piece.title}</a>
            </h5>
        ))}   
      </div>
    );
  }
}
export default Museumlist;