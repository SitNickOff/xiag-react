import React from 'react';
import classnames from 'classnames'

const Content = (props) => {
    return (
        <div className={classnames('page__content', 'page__content--padding')}>
            {props.children}
        </div>
    );
}

export default Content;