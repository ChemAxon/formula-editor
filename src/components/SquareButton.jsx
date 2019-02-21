import React from 'react';
import { func, bool, object } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { main, buttonHover, buttonBorder, buttonFocus } from './colors';

const styles = {
    root: {
        height: 32,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px !important',
        color: main,
        cursor: 'pointer',
        
    },
    notFocused: {
        opacity: 0.65,
        border: '1px solid transparent',
        '&:hover': {
            backgroundColor: buttonHover,
            borderRadius: 3,
            opacity: 1.0,
        }
    },
    focused: {
        backgroundColor: buttonFocus,
        borderRadius: 3,
        opacity: 1.0,
        border: `1px solid ${buttonBorder}`
    }
};

const SquareButton = ({icon, onMouseDown, focused, classes}) => (
    <div className = {classNames(classes.root, focused ? classes.focused : classes.notFocused)} onMouseDown = {onMouseDown}>
        {icon}
    </div>
);

SquareButton.propTypes = {
    icon: object.isRequired,
    onMouseDown: func.isRequired,
    focused: bool
};

export default withStyles(styles)(SquareButton);
