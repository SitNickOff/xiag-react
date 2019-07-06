import React from 'react';
import { 
    Route, 
    Switch, 
    //withRouter 
} from 'react-router-dom';

import Header from '../Header';
import Content from '../Content';
import IndexPage from '../../Pages/IndexPage';
import QuestionViewPage from '../../Pages/QuestionVeiwPage';
import QuestionEditPage from '../../Pages/QuestionEditPage';
import NotFound from '../../Pages/NotFound';



const Page = (props) => {
    return (
        <div className="page">
            <Header />
            <Content>
                <Switch>
                    <Route exact path='/' component={IndexPage}/>
                    <Route exact path='/poll' component={IndexPage} {...props}/>
                    <Route exact path='/poll/create' component={QuestionEditPage} new={true} />
                    <Route exact path='/poll/:id' component={QuestionViewPage} />   
                    <Route exact path='/poll/:id/edit' component={QuestionEditPage} new={true} />                 
                    <Route component={NotFound} />
                </Switch>
            </Content>
        </div>        
    );
}

export default Page;