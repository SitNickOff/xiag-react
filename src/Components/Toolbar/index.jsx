import React from 'react';
import ToolbarLink from '../ToolbarLink';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      width: 360,
    },
    link: {
        margin: '0 8px'
    }
});

const Toolbar = ({classes}) => {
    return (
        <nav className={classes.root}>
            <ToolbarLink to="/" className="mdc-tab">Poll</ToolbarLink>
            
            <a className = {classes.link} href='https://test-task.xiag.ch/fullstack-developer.html' target='_blank' rel="noopener noreferrer">
                Task
            </a>                    
            
        </nav>
    )
}

export default withStyles(styles)(Toolbar);