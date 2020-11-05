import React, { Component } from 'react';

class AnswerOption extends Component {
  OnNextQuiz=(id,res)=>{
    var {ans} = this.props;
    this.props.OnNextQuiz(id,res)
    var x =document.getElementById(ans.content);
    if(x!==null){
      setTimeout(()=>{
        x.checked =false
      },300) 
    }
    
  }
  render(){
    var {ans,id} = this.props;
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={ans.content}
          value={ans}
          onClick={()=>this.OnNextQuiz(id,ans.type)}
        />
        <label className="radioCustomLabel" htmlFor={ans.content} >
          {ans.content}
        </label>
      </li>
    );
  }
}
export default AnswerOption;
