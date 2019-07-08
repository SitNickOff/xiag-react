import React from 'react';
import ToolbarLink from '../ToolbarLink';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
    },
    link: {
        margin: '0 8px'
    }
});

const Toolbar = ({classes}) => {
    return (
        <nav className={classes.root}>
            <ToolbarLink to="/" className={classes.link}>New Poll</ToolbarLink>
            <ToolbarLink to="/poll" className={classes.link}>All Polls</ToolbarLink>
            
            <a className = {classes.link} href='https://test-task.xiag.ch/fullstack-developer.html' target='_blank' rel="noopener noreferrer">
                Test Task
            </a>                    
            
        </nav>
    )
}

export default withStyles(styles)(Toolbar);