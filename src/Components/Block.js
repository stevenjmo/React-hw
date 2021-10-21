import { findByLabelText } from '@testing-library/dom';
import React from 'react';

class Block extends React.Component {
   
    //ADD CODE HERE
  constructor(props) {
    super(props);
  }
    
  render() {

  const mystyle = {
      // ADD CODE HERE
      backgroundColor: this.props.col,
    };

  return (
    <>
      <div class = "blockers" style={
        // ADD CODE HERE
        mystyle
        }>
      </div>
      
      <div className="bottom">
          <div className="white"></div>
      </div>


    </>
      );
    }
  }


  export default Block;