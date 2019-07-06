import React from 'react';

import Toolbar from '../Toolbar';

const Header = (props) => {
    return (
        <React.Fragment>
            <div className="page__header">
                <div className="page__logo">
                    <a href="https://www.xiag.ch" target='_blank' rel='noopener noreferrer'>
                        <img src="https://test-task.xiag.ch/images/page-logo.png" alt="XIAG AG"/>
                    </a>
                </div> 
                <Toolbar />               
            </div>            
            <div className="page__image">
                <div className="page__task-title">
                    Poll website task
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;