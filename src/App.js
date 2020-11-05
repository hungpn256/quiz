import './App.css';
import { Component } from 'react';
import QuestionContainer from './containers/QuestionContainer'
class App extends Component{
    render(){
        return(
            <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <QuestionContainer/>
      </div>
           
        )
    }
}

export default App;
