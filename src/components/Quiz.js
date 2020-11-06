import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
class Quiz extends Component {
  answer = (ans)=>{
    var {quiz} =  this.props;
    var {OnNextQuiz} = this.props;
    var result = [];
    result = ans.map((val,ind)=>{
      return(
        <AnswerOption key ={ind} ans = {val} id = {quiz.id} OnNextQuiz={OnNextQuiz} ind = {ind}/>
      )
    })
    return result;
  }
  render(){
    var {quiz,numberQuiz} =  this.props;
    return (
      <div
      className="container"
      >
          <QuestionCount numberQuiz={numberQuiz} quiz={quiz}/>
          <Question question = {quiz.question} />
          <ul className="answerOptions">
            {this.answer(quiz.answers)}
          </ul>
        </div>
    );
  }
}

export default Quiz;
