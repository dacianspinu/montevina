import React, { Component } from 'react';
import '../Shared.css'
import './index.css'


class ProfileArea extends Component {
  render() {
    return (
      <div className="big-area vertical-centered-content horizontal-centered-content">
        <div className="vertical-centered-content-inner-wrapper">
            <div className="profile-picture"></div>
        </div>
      </div>
    );
  }
}

export default ProfileArea;
