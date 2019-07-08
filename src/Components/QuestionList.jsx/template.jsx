import React from 'react';

import ToolbarLink from '../ToolbarLink';

class QuestionsList extends React.Component{

    componentDidMount() {
        this.props.questionsGet();
    }

    render() {
        const {questions, history, questionDelete} = this.props;
    
        return (
            <React.Fragment>
                <div style={{display: 'flex', marginBottom: 16}}>
                    <h2 style={{marginRight: 'auto'}}>Question List</h2>
                    <div className="ex2-question__submit">
                        <button className="btn" onClick={()=>history.push('/')} >Add Question</button>
                    </div>
                </div>

                <table className="ex2-table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Question</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index)=>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{question.content}</td>
                                <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <ToolbarLink to={`/poll/${question._id}`} >View</ToolbarLink> 
                                    <ToolbarLink to={`/poll/${question._id}/edit`} >Edit</ToolbarLink>
                                    <ToolbarLink to={`/poll`} onClick={()=>questionDelete(question._id)} >Delete</ToolbarLink>
                                </td>
                            </tr>
                        )}
                    
                    </tbody>
                </table>

                
            </React.Fragment>
            
        );
    }
}

export default QuestionsList;