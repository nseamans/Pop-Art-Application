import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from "../banner/hero";
import Artist from "./components/artistdisplay/artist";
import "./info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialResult: "", name: "",
      reference: "",     notableWorks: "",
      description: "",   images: [],
      portrait: "",      video: "",
      value: "",         artDisplay: false,
      chooseMsg: true
    };
  }
  handleChange(id, name, reference, notableWorks, 
               description, portrait, images, video) {
    if (this.state.artDisplay === false) {
      this.setState({ artDisplay: !this.state.artDisplay });
    }
    if (this.state.chooseMsg === true) {
      this.setState({ chooseMsg: !this.state.chooseMsg });
    }
    this.setState({ artistId: id });
    this.setState({ name: name });
    this.setState({ reference: reference });
    this.setState({ notableWorks: notableWorks });
    this.setState({ description: description });
    this.setState({ portrait: portrait });
    this.setState({ images: images });
    this.setState({ video: video });
  }
  render() {
    return (
      <div>
        <div class="container artistcard ">
        <hr className="line" />
          <Hero title="Index" />
          <div class="row">
            <div class="col-sm-3">
              <div class="">
                <hr className="line" />
                <h4>Artists List:</h4>
                {this.props.artistsInfo.map(info => (
                  <div>
                    <button
                      type="button"
                      class="artistProfileButton"
                      onClick={() => {
                        this.handleChange(
                          info.id,           info.name,
                          info.reference,    info.notableWorks,
                          info.description,  info.portrait,
                          info.images,       info.video
                        );
                      }}>
                        {info.reference.charAt(0).toUpperCase() +
                        info.reference.substring(1)}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-sm-9">
              {this.state.chooseMsg && (
                <div className="container">
                  <div className="artistDisplay">
                      <div className="row">
                        <div className="col-sm-12 hidden-xs">
                          <h2 className="text-center textartistname">
                            About Content
                          </h2>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 hidden-xs">
                          <hr className="line" />
                          <h6>
                            This list includes the most famous artists in the
                            Art Movement. These artist showcase that Pop Art can
                            serve as more than a critique or satire on popular
                            iconography and advertising of the time. Themes
                            in such projects often display admiration for popular
                            culture. 
                          </h6>
                          <hr className="line" />
                          <h5>How to access the information:</h5>
                          <h6>
                            The on each artist can be accessed by the name list
                            on the left. Here a description, a photograph, and
                            several examples of each artists works is provided.
                          </h6>
                        </div>
                    </div>
                    <hr className="line" />
                  </div>
                </div>
              )}
              {this.state.artDisplay && (
                <div className="artistDisplay">
                  <Artist
                    name={this.state.name}
                    reference={this.state.reference}
                    notableWorks={this.state.notableWorks}
                    description={this.state.description}
                    portrait={this.state.portrait}
                    images={this.state.images}
                    video={this.state.video}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="line" />
      </div>
    );
  }
}
export default Info;