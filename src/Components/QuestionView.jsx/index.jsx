import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import QuestionViewTemplate from './template';

import { QuestionAddResponse } from '../../actions'

function mapStateToProps(state, props) {
    return {
        question: state.questions.find(question=>+question._id===+props.match.params.id),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addResponse: (questionId, resp) => dispatch(QuestionAddResponse(questionId, resp)),
    };
}

const QuestionViewContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionViewTemplate)

export default withRouter(QuestionViewContainer);