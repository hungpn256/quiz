import React, { Component } from 'react';

class Result extends Component {
  render(){
    var {result,numberQuiz}= this.props;
    return (
        <h1 className="container result">{
          result>0?"Chúc mừng bạn đúng " + result+"/"+numberQuiz:"Bạn không đúng câu nào :("
        }
        </h1>
    );
  }
}

export default Result;
