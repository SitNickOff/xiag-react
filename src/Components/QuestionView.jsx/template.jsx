import React from 'react';
import ResponseForm from './ResponseForm';
import PollResult from './PollResult';

class QuestionView extends React.Component {    
    render() {
        const {question, history, addResponse} = this.props;
        return (
            <React.Fragment>
                <div style={{display: 'flex'}}>
                    <h2 style={{marginRight: 'auto'}}>{question.content}</h2>
                    <div className="ex2-question__submit">
                        <button className="btn" onClick={history.goBack}>Back</button>
                    </div>
                </div>
                {question.respondentsAnswers.find(resA=>resA.isMine?true:false)===undefined&&
                    <ResponseForm question={question} addResponse = {addResponse} />
                }
                <PollResult question={question}/>
            </React.Fragment>
        );
    }
}

export default QuestionView;