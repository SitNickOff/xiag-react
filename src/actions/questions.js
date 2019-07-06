import axios from 'axios';

export const QUESTIONS_GET = 'QUESTIONS_GET';

export function questionsGet() {
    return dispatch => {
        return axios.get('http://localhost:5000/api/')
            .then(response => response.data)
            .then(answer => {
                console.log(answer);
                dispatch({
                    type: QUESTIONS_GET,
                    answer
                });
            })
            .catch(error => console.log(error.message));
    }
}

export const QUESTION_CREATE = 'QUESTION_CREATE';

export function questionCreate(question, callBack) {
    return dispatch => {
        delete question._id;
        return axios.post('http://localhost:5000/api/create', question)
            .then(response => response.data)
            .then(answer => {
                console.log(answer);
                dispatch({
                    type: QUESTION_CREATE,
                    question: {
                        ...question,
                        _id: answer.insertedId
                    }
                });

                if (callBack) callBack();
            })
            .catch(error => console.log(error.message));
        
    }
}

export const QUESTION_UPDATE = 'QUESTION_UPDATE';

export function questionUpdate(question, callBack) {
    return dispatch => {
        const id = question._id;
        delete question._id;
        return axios.post(`http://localhost:5000/api/${id}/update`, question)
            .then(response => response.data)
            .then(answer => {
                console.log(answer);
                dispatch({
                    type: QUESTION_UPDATE,
                    question
                });

                if (callBack) callBack();
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
                console.log(answer);
                dispatch({
                    type: QUESTION_DELETE,
                    questionId
                });
                dispatch(questionsGet());
            })
            .catch(error => console.log(error.message));
    }
}


export const QUESTIONS_ADD_RESPONSE = 'QUESTIONS_ADD_RESPONSE';

export function QuestionAddResponse(question, resp) {
    return dispatch => {
        const respToServer = {...resp};
        delete respToServer.isMine;
        const changedQuestionToServer = {
            ...question,
            respondentsAnswers: [...question.respondentsAnswers, respToServer]
        };
        const changedQuestionToLocal = {
            ...question,
            respondentsAnswers: [...question.respondentsAnswers, resp]
        };
        dispatch(questionUpdate(changedQuestionToServer));
        dispatch({
            type: QUESTIONS_ADD_RESPONSE,
            question: changedQuestionToLocal,
            resp
        });
        
    }
}