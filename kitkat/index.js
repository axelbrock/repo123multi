import React, { Component, PropTypes } from 'react';

class Kitkat extends Component {
	
  render(){
	  
    return (
      <div className='nadiakhourithree'>
	      <h2 className='demo_text'>kitkat: {this.props.text}</h2>
      </div>
    );
	  
  }
}

export default Kitkat;
