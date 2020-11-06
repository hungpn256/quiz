import React, { Component } from 'react';

class ResultQuestion extends Component {
  show =()=>{
    var {type} = this.props;
    if(type){
      return "Chính xác!!";
    }
    return "Nooo!";
  }
  render(){  
    return (
        <h4 className="container result-question">
          {this.show()}
        </h4>
    );
  }
}

export default ResultQuestion;
