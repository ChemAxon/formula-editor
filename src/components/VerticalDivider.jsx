import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { main } from './colors';

const styles = {
    root: {
        width: 1,
        height: 32,
        borderLeft: '1px solid',
        borderColor: main
    }
};

const VerticalDivider = ({classes}) => (
    <div className = {classes.root}/>
);

export default withStyles(styles)(VerticalDivider);
