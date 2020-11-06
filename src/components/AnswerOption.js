import React, { Component } from 'react';
import ResultQuestion from './ResultQuestion'
class AnswerOption extends Component {
  OnNextQuiz=(id,res)=>{
    var {ans,ind} = this.props;
    this.props.OnNextQuiz(id,res)
    var x =document.getElementById(ans.content);
    var y = document.getElementsByClassName('result-question')[ind];
    var ansHTML = document.getElementsByClassName('answerOption');
    for(var i=0;i<ansHTML.length;i++){
      ansHTML[i].classList.add('noClick')
    }
    y.style.display='block'
    if(ans.type){
      y.style.color='#8bc53f';
    }
    else y.style.color = 'red'
    if(x!==null){
      setTimeout(()=>{
        x.checked =false
        y.style.display='none'
        y.style.color='black'
        for(var i=0;i<ansHTML.length;i++){
          ansHTML[i].classList.remove('noClick')
        }
      },1500) 
      setTimeout(()=>{
        x.checked =false
      },1400) 
    }
  }
  render(){
    var {ans,id} = this.props;
    // .getElementsByClassName('result-question')
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
        <ResultQuestion type={ans.type}/>
      </li>
    );
  }
}
export default AnswerOption;
