import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Intro from "./components/intro/intro";
import Info from "./components/info/info";
import Popart from "./components/popart/popart";
import About from "./components/about/about";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistInfo: [],
      popArtInfo: [],
      apiLocations: []
    };
  }

  componentDidMount() {

    fetch("https://popartapi.herokuapp.com/api/allArtists")
      .then(res => res.json())
      .then(artistInfo => this.setState({ artistInfo }));
    
    fetch("https://popartapi.herokuapp.com/api/popArtDescription")
      .then(res => res.json())
      .then(popArtInfo => this.setState({ popArtInfo }));

    fetch("https://popartapi.herokuapp.com/api/apiInfo")
      .then(res => res.json())
      .then(apiLocations => this.setState({ apiLocations }));

  }

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <nav class="navbar navbar-dark navbar-expand-lg">
              <Link class="navbar-brand logo" to="/Intro">                
                |Pop-Art Showcase|
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <i class="fas fa-bars toggleStyle"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <div className="pageMenu">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link pageLink" to="/Description">
                        Summary
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link pageLink" to="/Artists">
                        Index
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link pageLink" to="/About">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link pageLink"
                         href={this.state.apiLocations[0]} 
                         target="_blank">
                         API
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        
            <div className="fade-in">
              <Route path     = "/Intro" component= {Intro} />
              <Route path     = "/Description" render = {props => <Popart {...props}
                popArtInfo    = {this.state.popArtInfo} />} />
              <Route path     = "/Artists" render= {props => <Info {...props} 
                artistsInfo   = {this.state.artistInfo} />} />
              <Route path     = "/About" render= {props => <About {...props} 
                apiLocations  = {this.state.apiLocations} />} />
            </div>

        </div>
      </Router>
    );
  }
}

export default App;
