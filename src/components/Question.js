import React, { Component } from 'react';

class Question extends Component{
  render(){
    var {question} = this.props;
    return <h2 className="question">{question}</h2>;
  }
}
export default Question;