import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import QuestionListTemplate from './template';
import { questionsGet, questionDelete } from '../../actions';

function mapStateToProps(state) {
    return {
        questions: state.questions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        questionsGet: () => dispatch(questionsGet()),
        questionDelete: (id) => dispatch(questionDelete(id))
    };
}

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionListTemplate)

export default withRouter(QuestionListContainer);