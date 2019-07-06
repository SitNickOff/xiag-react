import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import QuestionListTemplate from './template';

function mapStateToProps(state) {
    return {
        questions: state.questions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //productsAmountTotalRent: (cartProducts, weeksQuantity) => cartProductsAmountTotalRent(cartProducts, weeksQuantity),
    };
}

const QuestionListContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionListTemplate)

export default withRouter(QuestionListContainer);