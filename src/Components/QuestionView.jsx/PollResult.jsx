import React from 'react';

const PollResult = ({question, user}) => {
    return (
        <div>
            <h3>Results</h3>
            <table className="ex2-table" style={{marginTop: 16}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        {question.answers.map((answer, index)=>
                            <th key={index}>{answer}</th>    
                        )}
                    </tr>
                </thead>
                <tbody>
                    {question.respondentsAnswers.map((rAnswer, index) => 
                        <tr key={index} style={{background: rAnswer.isMine?'rgb(248, 155, 28, .2)':'inherit'}}>
                            <td>{rAnswer.respondent}</td>
                            {question.answers.map((answer, aIndex)=>
                                <td key={aIndex}>{answer===rAnswer.answer?'X':''}</td>    
                            )}
                        </tr>  
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default PollResult;