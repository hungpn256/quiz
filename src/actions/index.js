import * as types from '../constants/index';

export const NextQuiz =(id,res)=>{
    return {
        type : types.NEXT_QUESTION,
        id,
        res
    }
}