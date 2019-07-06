import React from 'react';
import ResponseForm from './ResponseForm';
import PollResult from './PollResult';

class QuestionView extends React.Component {    
    render() {
        const {question, history, addResponse, userAdd, user} = this.props;
        return (
            <React.Fragment>
                <div style={{display: 'flex'}}>
                    <h2 style={{marginRight: 'auto'}}>{question.content}</h2>
                    <div className="ex2-question__submit">
                        <button className="btn" onClick={history.goBack}>Back</button>
                    </div>
                </div>
                {question.respondentsAnswers.find(resA=>resA.isMine)===undefined&&
                    <ResponseForm question={question} user={user} addResponse = {addResponse} userAdd={userAdd} />
                }
                <PollResult question={question} user={user}/>
            </React.Fragment>
        );
    }
}

export default QuestionView;