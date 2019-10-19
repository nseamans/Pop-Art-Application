import React, { Component } from "react";
class Summary extends Component {
  render() {
    return (
      <div>
          <hr className="line" />
          <h5>{this.props.period}</h5>
          <h6>{this.props.description}</h6>
          <hr className="line" />
      </div>
    );
  }
}
export default Summary;