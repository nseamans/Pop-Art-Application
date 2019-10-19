import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./artist.css";

class Artist extends Component {
  
  render() {
    function imageExamples(images) {
      const rtnArray = [];
      for (let i = 0; i < images.length; i++) {
        rtnArray[i] = images[i].image;
      }
      return rtnArray;
    }
    return (
      <div className="container">
          <div className="row">
            <div className="col-sm-12 hidden-xs">
              <h2
                id={"#" + this.props.reference}
                className="text-center textartistname">
                {this.props.name}
              </h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 hidden-xs">
              <h5>Description</h5>
              <h6>{this.props.description}</h6>
              <hr className="line" />
              <h5>Notable Art Pieces</h5>
              <h6>{this.props.notableWorks.join(" - ")}</h6>
              <hr className="line" />
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
            <h5>Portrait and Other Images</h5>
              <Carousel showIndicators={false} showThumbs={false}>
                  <div>
                    <img
                      className="imageProperties portrait"
                      src={this.props.portrait}
                    ></img>
                  </div>

                  <img className="imageProperties" src={this.props.images[0]}></img>
                  <img className="imageProperties" src={this.props.images[1]}></img>
                  <img className="imageProperties" src={this.props.images[2]}></img>
              </Carousel>
     
              <hr className="line" />
                <h5>Other Content</h5>
                
                <div className="centeredVideo"> 
                  <div className="row">
                    <div className="col-sm-12 ">
                      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg">
                        Internet Video Content
                      </button>  
                    </div>
                  </div>
                  
                  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <hr className="line" />

                        <p className="warning">Content Warning: Video Content is out of expression of this site and may contain content on:
                                      Social Issues, Artist Substance Abuse, Artistic Nudity, Bright/Flashing lights, Suggestive Themes</p>
                        <iframe width="420" height="345" src={`https://www.youtube.com/embed/${this.props.video}?controls=0`} />
                        <hr className="line" />
                      </div>
                    </div>
                  </div>
              </div>   
            </div>
          </div>

        <hr className="line" />
      </div>
    );
  }
}

export default Artist;