 /* 
    Formula-editor component to create scientific formulas.   

    Copyright (C) 2019  ChemAxon Kft.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.*/
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
