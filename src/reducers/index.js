import {combineReducers} from 'redux';
import questionReducer from './QuestionsReducer';
const appReducer  = combineReducers({
    questionReducer,
})
export default appReducer;