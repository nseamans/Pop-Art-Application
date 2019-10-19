import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "../banner/hero";

class About extends Component {
  render() {
    return (
      <div> 
        <div class="container artistcard ">
          <hr className="line" />
          <Hero title="About" />
          <hr className="line" />
          <h3>About This Site</h3>
          <hr className="line" />
          <p>
            This site is intended to provide a brief introduction into the pop art movement.
            Also, this web site is intended to showcase React to interact with node.js.
            Almost all of the content provided is given by an api hosted through AWS.
            All of the content is stored on a server directly servicing the website.
            This means that if an artist is added, their content will automatically
            be served to the website through the server. There are no databases 
            utilized through for this. Everything is referenced by folders and files
            on the server itself. Algorithms and array mapping methods are utilized
            to query the folders, information, and files. 
          </p>
          
          <hr className="line" />

          <h3>API Links</h3>

          <hr className="line" />

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <a href= {this.props.apiLocations[0]} target="_blank">
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg">
                      {this.props.apiLocations[0]}
                    </button> 
                </a> 
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <hr className="line" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
              <a href= {this.props.apiLocations[1]} target="_blank">
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg">
                      {this.props.apiLocations[1]}
                    </button> 
                </a> 
              </div>
            </div>
          </div>
          <hr className="line" />

          <h3>Frameworks Used</h3>

          <hr className="line" />

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <a href= "https://reactjs.org/" target="_blank">
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg">
                      https://reactjs.org/
                    </button> 
                </a> 
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <hr className="line" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
              <a href= "https://nodejs.org/en/" target="_blank">
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg">
                      https://nodejs.org/en/
                    </button> 
                </a> 
              </div>
            </div>
          </div>
          <hr className="line" />

        </div>
        <hr className="line" />
      </div>
    );
  }
}
export default About;