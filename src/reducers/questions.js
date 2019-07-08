import {
    QUESTIONS_ADD_RESPONSE, QUESTION_CREATE, QUESTION_UPDATE, QUESTIONS_GET, QUESTION_GET//, WS_ONMESSAGE
} from '../actions';

// const initialState = [
//     {
//         _id: 1,
//         content: 'Вы умный?',
//         answers: ['Да', 'Нет'],
//         author: 'Ситников А.',
//         respondentsAnswers: [
//             {
//                 respondent: 'Ситников А.',
//                 answer: 'Да'
//             }
//         ]
//     },
//     {
//         _id: 2,
//         content: 'На сколько Вы красивый?',
//         answers: ['Самый красивый', 'Очень красивый', 'Симпатичный'],
//         author: 'Ситников А.',
//         respondentsAnswers: []
//     }
// ];

function reducer(state = [], action) {
    switch (action.type) {

        // case WS_ONMESSAGE:
        //     const mQues = JSON.parse(action.message.data);            
        //     const lQues = state.find(q=>q._id===mQues._id);
        //     console.log({mQues, lQues});

        //     if (lQues === undefined) return state;

        //     return state.map(question=>{
        //         if (question._id===lQues) 
        //             return {
        //                 ...question,
        //                 respondentsAnswers: question.respondentsAnswers.map((rA, rIndex)=>{
        //                     if (lQues.respondentsAnswers[rIndex]&&lQues.respondentsAnswers[rIndex].isMine)
        //                         return {...lQues.respondentsAnswers[rIndex]};

        //                     return rA;
        //                 })
        //             };

        //         return question;
        //     });


        case QUESTION_GET:
            const lQuestion = state.find(q=>q._id===action.question._id);

            if (lQuestion === undefined) return [...state, action.question];

            return state.map(question=>{
                
                if (question._id===lQuestion._id) {
                    return {
                        ...action.question,
                        respondentsAnswers: action.question.respondentsAnswers.map((rA, rIndex)=>{
                            if (lQuestion.respondentsAnswers[rIndex]&&lQuestion.respondentsAnswers[rIndex].isMine)
                                return {...lQuestion.respondentsAnswers[rIndex]};

                            return rA;
                        })
                    };
                }

                return question;
            });

        case QUESTIONS_GET:
            return action.questions.map(question=>{
                if (!question.answers)
                    return {
                        ...question,
                        answers: [],
                        respondentsAnswers: []
                    }
            
                const lQuestion = state.find(q=>q._id===question._id);

                if (lQuestion===undefined) return question;
                
                return {
                    ...question,
                    respondentsAnswers: question.respondentsAnswers.map((rA, rIndex)=>{
                        if (lQuestion.respondentsAnswers[rIndex]&&lQuestion.respondentsAnswers[rIndex].isMine)
                            return {...lQuestion.respondentsAnswers[rIndex]};

                        return rA;
                    })
                };
            });

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
                if (quest._id===action.question._id) {
                    return action.question;
                }

                return quest;
            });
    
        default:
            return state;
    }
}

export default reducer;