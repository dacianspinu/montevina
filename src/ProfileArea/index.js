import React, { Component } from 'react';
import '../Shared.css'
import './index.css'


class ProfileArea extends Component {
  render() {

    let backgroundImageStyle = {
        backgroundImage: "url(" + process.env.PUBLIC_URL + '/profile.jpg)'
    }

    return (
      <div className="big-area big-area-left vertical-centered-content horizontal-centered-content">
        <div className="vertical-centered-content-inner-wrapper">
            <div className="details-wrapper">
                <div className="profile-picture" style={backgroundImageStyle}></div>
                <h2 className="profile-keyword">Front-End Developer.</h2>
                <h2 className="profile-keyword">Dreamer &</h2>
                <h2 className="profile-keyword">Geek.</h2>


                <p className="profile-description"> Hi there! I am Dacian Spînu and I am currently developing awesome front-end apps (@)Maxcode in Iasi, Romania.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default ProfileArea;
