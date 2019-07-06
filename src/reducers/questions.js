import {
    QUESTIONS_ADD_RESPONSE, QUESTION_CREATE, QUESTION_UPDATE
} from '../actions';

const initialState = [
    {
        _id: 1,
        content: 'Вы умный?',
        answers: ['Да', 'Нет'],
        author: 'Ситников А.',
        respondentsAnswers: [
            {
                respondent: 'Ситников А.',
                answer: 'Да'
            }
        ]
    },
    {
        _id: 2,
        content: 'На сколько Вы красивый?',
        answers: ['Самый красивый', 'Очень красивый', 'Симпатичный'],
        author: 'Ситников А.',
        respondentsAnswers: []
    }
];

function reducer(state = initialState, action) {
    switch (action.type) {
        case QUESTION_CREATE:
            return [
                ...state,
                {
                    ...action.question, 
                    _id: state.length+1
                }
            ];

        case QUESTION_UPDATE:
            return state.map(question=>{
                if (question._id===action.question._id)
                    return action.question;

                return question;
            })

        case QUESTIONS_ADD_RESPONSE:            
            return state.map(quest=>{
                if (quest._id===action.questionId) {
                    return{
                        ...quest,
                        respondentsAnswers: [...quest.respondentsAnswers, action.resp]
                    }
                }

                return quest;
            });
    
        default:
            return state;
    }
}

export default reducer;