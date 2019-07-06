import React from 'react';
import { NavLink } from 'react-router-dom';

function ToolbarLink({ children, ...rest }) {
    return (
        <NavLink activeClassName="button--active" {...rest}>{children}</NavLink>
    );
}

export default ToolbarLink;