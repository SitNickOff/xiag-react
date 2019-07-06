import React from 'react';
import classes from 'classnames'

class EditForm extends React.Component {
    state = {
        _id: this.props.question?this.props.question._id: 0,
        content: this.props.question?this.props.question.content:'',
        answers: this.props.question?this.props.question.answers:['',''],
        respondentsAnswers:this.props.question?this.props.question.respondentsAnswers:[]
    }

    handleChangeContent = event => {
        this.setState({ content: event.target.value });
    };

    handleAddAnswer = () => {
        this.setState({answers: [...this.state.answers, '']})
    }

    handleChangeAnswer = index => event => {
        this.setState({ 
            answers: this.state.answers.map((a, i)=>{
                if (i===index)
                    return event.target.value;
                
                return a;                
            })
        });
    };

    addQuestionChanges = () => {
        let validate = true;

        if (this.state.content==='') validate = false;

        this.state.answers.forEach(answer => {
            if (answer==='') validate=false;
        });

        if (validate) {
            if (this.state._id === 0) {
                this.props.questionCreate(this.state);
            } else {
                this.props.questionUpdate(this.state);
            }

            this.props.history.push('/poll');

        } else
            console.log('alert: fill all fields');
    }

    render() {
        const { history } = this.props;
        const question = this.state;
        return (
            <React.Fragment>
                <div style={{display: 'flex', marginBottom: 16}}>
                    <h2 style={{marginRight: 'auto'}}>{question?'Edit Question': 'New Question'}</h2>
                    <div className="ex2-question__submit">
                        <button className="btn" onClick={history.goBack} >Back</button>
                    </div>
                </div>

                <table className="poll-table">
                    <thead>
                        <tr>
                            <th>Question:</th>
                            <th>
                                <input 
                                    type="text" 
                                    value={question?question.content:''} 
                                    className="input-text" 
                                    placeholder='Insert question'
                                    onChange = {this.handleChangeContent}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {question.answers.map((answer, index)=>
                            <tr key={index}>
                                <th>{`Answer ${index+1}:`}</th>
                                <td>
                                    <input 
                                        type="text" 
                                        value={answer} 
                                        placeholder='Enter option' 
                                        onChange={this.handleChangeAnswer(index)} 
                                        className="input-text" 
                                    />
                                </td>
                            </tr>
                        )}
                    <tr>
                        <td className="poll-table__plus">
                            <button className={classes("btn","btn--plus")} onClick={this.handleAddAnswer}>
                                +
                            </button>
                        </td>
                        <td> </td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn--start" onClick={this.addQuestionChanges}>
                    Start
                </button>
            </React.Fragment>
        );
    }
}

export default EditForm;