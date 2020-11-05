import { Component } from 'react';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz'
import Result from '../components/Result'
import {NextQuiz} from '../actions/index'
class QuestionContainer extends Component{
    showResult=()=>{
        var {questionReducer,OnNextQuiz} = this.props;
        if(!questionReducer.end){
            return (
                <div className ="quiz">
                    <Quiz quiz={questionReducer.quiz} OnNextQuiz={OnNextQuiz} numberQuiz = {questionReducer.numberQuiz}/>
                </div>
            )
        }
        else {
            return <Result result={questionReducer.result} numberQuiz = {questionReducer.numberQuiz}/>
        }
    }
    render(){
        return(
            <div>
                {this.showResult()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        questionReducer : state.questionReducer
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
      OnNextQuiz:(id,res)=>{setTimeout(() => dispatch(NextQuiz(id,res)), 350);
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(QuestionContainer);