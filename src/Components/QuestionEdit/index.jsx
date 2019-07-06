import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { questionCreate, questionUpdate} from '../../actions'

import QuestionEditTemplate from './template';

function mapStateToProps(state, props) {
    return {
        question: state.questions.find(question=>question._id===props.match.params.id),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        questionCreate: (question, callBack) => dispatch(questionCreate(question, callBack)),
        questionUpdate: (question, callBack) => dispatch(questionUpdate(question, callBack)),
    };
}

const QuestionEditContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionEditTemplate)

export default withRouter(QuestionEditContainer);