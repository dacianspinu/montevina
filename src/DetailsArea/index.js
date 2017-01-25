import React, { Component } from 'react';
import "./index.css"

class DetailsArea extends Component {
  render() {
    return (
      <div className="big-area big-area-right">
        <div className="details-box projects">
          <div className="box-item-wrapper title">
            <i className="em em-computer"></i><h1 className="box-title">Projects</h1>
          </div>

          <img src={ process.env.PUBLIC_URL + 'stackla_project.png' } className="box-image computer" role="presentation"></img>
        </div>
        <div className="details-box experience">
          <div className="box-item-wrapper title">
            <i className="em em-briefcase"></i><h1 className="box-title">Experience</h1>
          </div>
        </div>
        <div className="details-box studies">
          <div className="box-item-wrapper title">
            <i className="em em-books"></i><h1 className="box-title">Studies</h1>
          </div>
        </div>
        <div className="details-box photo">
          <div className="box-item-wrapper title">
            <i className="em em-camera"></i><h1 className="box-title">Photos</h1>
          </div>
        </div>  
      </div>
    );
  }
}

export default DetailsArea;
