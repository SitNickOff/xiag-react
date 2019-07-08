import React from 'react';

class ResponseForm extends React.Component{

    state = {
        respondent: this.props.user.name,
        answer: ''
    };

    handleChangeResponden = event => {
        this.setState({ 
            respondent: event.target.value
        });
    };

    handleSelectAnswer = event => {
        this.setState({answer:event.target.value});
    }
    
    handleSendResponse = () => {
        if (this.state.respondent!==''&&this.state.answer!=='') {
            this.props.userAdd(this.state.respondent);
            this.props.addResponse(this.props.question, this.state);
        } else 
            alert('Fill All Fields');
    }

    render() {        
        const {question} = this.props;
        return (
            <div className="ex2-question">
                <div className="ex2-question__label">
                    Your name:
                </div>
                <div className="ex2-question__input">
                    <input 
                        type="text" 
                        className="input-text" 
                        value={this.state.respondent} 
                        onChange={this.handleChangeResponden}
                        placeholder={'insert your name'}
                    />
                </div>
                <div className="ex2-question__answer" style={{display: 'flex', flexDirection: 'column'}}>
                    {question.answers.map((answer, id) =>
                        <label key={id}>
                            <input type="radio" name="do-we-go" value={answer} onChange={this.handleSelectAnswer}/>
                            {answer}
                        </label>
                    )}
                </div>
                <div style={{display: 'flex'}}>
                    <div className="ex2-question__submit">
                        <input type="submit" className="btn" value="Submit" onClick={this.handleSendResponse}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResponseForm;
