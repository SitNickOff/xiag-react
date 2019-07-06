export const QUESTION_CREATE = 'QUESTION_CREATE';

export function questionCreate(question) {
    return dispatch => {
        dispatch({
            type: QUESTION_CREATE,
            question
        });
    }
}

export const QUESTION_UPDATE = 'QUESTION_UPDATE';

export function questionUpdate(question) {
    return dispatch => {
        dispatch({
            type: QUESTION_UPDATE,
            question
        });
    }
}


export const QUESTIONS_ADD_RESPONSE = 'QUESTIONS_ADD_RESPONSE';

export function QuestionAddResponse(questionId, resp) {
    return dispatch => {
        dispatch({
            type: QUESTIONS_ADD_RESPONSE,
            questionId,
            resp
        });
    }
}