import React, { Component } from 'react';

import DetailsArea from './DetailsArea/index';
import ProfileArea from './ProfileArea/index';


class App extends Component {
  render() {
    
    //  inline style for a single element
    //  so that I don't have to import a single css file in order to use just one class from it 
    
    let fullHeightStyle = {
      height: 100 + "%"
    };

    return (
      <div style={fullHeightStyle}>
        <ProfileArea></ProfileArea>
        <DetailsArea></DetailsArea>        
      </div>
    );
  }
}

export default App;
