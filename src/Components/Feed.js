import React from 'react';
// ADD CODE HERE
import Block from './Block';

const blocks = [];
let length = 0;

class Feed extends React.Component {

    state = {
      // ADD CODE HERE
      blocks: [],
      length: 0,
      showopt: false
    }

    addBlock = (color) => {
      let props = {col: color};
      let newlen = blocks.unshift(<Block {...props} />)
        this.setState({
        // ADD CODE HERE
        length: newlen
        //blocks: <Block {...props} />
      })
    }

    pickColorlayout = () => {
      if (this.state.showopt == false) {
        this.setState({
          showopt: true
        })
      }
      else{
        this.setState({
            showopt: false
        })
      }
    }
    
    render() {

      return (
        <div className = 'mainfeed'>
        <div className="input">
        {blocks}
        </div>
        <div>
          <button class="button" onClick={this.pickColorlayout}>+ Post Block</button>
        </div>
        { this.state.showopt ?         <div className="pickblock">
        <div>
            <button className="red"  onClick={() => this.addBlock("rgb(134, 5, 5)")}></button>
            <button className="blue" onClick={() => this.addBlock("rgb(21, 0, 141)")}></button>
        </div>
        <div>
            <button className="green"  onClick={() => this.addBlock("rgb(59, 110, 0)")}></button>
            <button className="purple"  onClick={() => this.addBlock("rgb(58, 0, 97)")}></button>
        </div>
     </div>: null }   
      </div>
    
      );
    }
  }


  export default Feed;