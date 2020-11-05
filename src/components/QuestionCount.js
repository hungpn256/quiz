import React, { Component } from 'react';

class QuestionCount extends Component {
  showQuestionCount=(ind,number)=>{
    return <h2>Question {ind} of {number}</h2>
  }
  render(){
    var {numberQuiz,quiz} = this.props;
    return (
      <div className="questionCount">
        {this.showQuestionCount(quiz.id,numberQuiz)}
      </div>
    );
  }
}

export default QuestionCount;
