import axios from 'axios';

import { wsSendMessage } from './ws'

export const QUESTIONS_REQUEST = 'QUESTIONS_REQUEST';

export function questionsRequest() {
    return {
        type: QUESTIONS_REQUEST
    };
}

export const QUESTIONS_GET = 'QUESTIONS_GET';

export function questionsGet(callBack) {
    return dispatch => {
        dispatch(questionsRequest());
        return axios.get('http://localhost:5000/api/')
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTIONS_GET,
                    questions: answer,
                    answer
                });

                if (callBack) callBack();
            })
            .catch(error => console.log(error.message));
    }
}

export function questionsGetForLocalStorage(questions, callBack) {
    return dispatch => {
        dispatch(questionsRequest());
        return axios.post('http://localhost:5000/api/getByArray', questions)
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTIONS_GET,
                    questions: answer,
                    answer
                });

                if (callBack) callBack();
            })
            .catch(error => console.log(error.message));
    }
}

export const QUESTION_GET = 'QUESTION_GET';

export function questionGet(id, callBack) {
    return dispatch => {
        dispatch(questionsRequest());
        return axios.get(`http://localhost:5000/api/${id}/get`)
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTION_GET,
                    question: answer,
                    answer
                });

                if (callBack) callBack();
            })
            .catch(error => alert(error.message));
    }
}

export const QUESTION_CREATE = 'QUESTION_CREATE';

export function questionCreate(question, callBack) {
    return dispatch => {
        delete question._id;
        return axios.post('http://localhost:5000/api/create', question)
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTION_CREATE,
                    question: {
                        ...question,
                        _id: answer.insertedId,
                        answer
                    }
                });

                if (callBack) callBack(answer.insertedId);
            })
            .catch(error => console.log(error.message));
        
    }
}

export const QUESTION_UPDATE = 'QUESTION_UPDATE';

export function questionUpdate(question, callBack) {
    return dispatch => {
        const sQuestion = {...question};
        const id = sQuestion._id; console.log({id})
        delete sQuestion._id;
        return axios.post(`http://localhost:5000/api/${id}/update`, sQuestion)
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTION_UPDATE,
                    question,
                    answer
                });

                if (callBack) callBack(id);
            })
            .catch(error => console.log(error.message));

    }
}

export const QUESTION_DELETE = 'QUESTION_DELETE';

export function questionDelete(questionId) {
    return dispatch => {
        return axios.post(`http://localhost:5000/api/${questionId}/delete`)
            .then(response => response.data)
            .then(answer => {
                dispatch({
                    type: QUESTION_DELETE,
                    questionId,
                    answer
                });
                dispatch(questionsGet());
            })
            .catch(error => console.log(error.message));
    }
}


export const QUESTIONS_ADD_RESPONSE = 'QUESTIONS_ADD_RESPONSE';

export function QuestionAddResponse(question, resp) {
    return dispatch => {
        
        const changedQuestionToServer = {
            ...question,
            respondentsAnswers: [...question.respondentsAnswers, resp]
        };
        const myResp = {...resp, isMine: true}
        const changedQuestionToLocal = {
            ...question,
            respondentsAnswers: [...question.respondentsAnswers, myResp]
        };

        dispatch(questionGet(question._id, ()=>{ 
            dispatch(questionUpdate(changedQuestionToServer, ()=>{                
                dispatch({
                    type: QUESTIONS_ADD_RESPONSE,
                    question: changedQuestionToLocal,
                    resp
                }); 
                dispatch(wsSendMessage({questionId:question._id}));
            }));
            
        }));
        
        
    }
}