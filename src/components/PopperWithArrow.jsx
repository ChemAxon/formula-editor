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
import React, { useState } from 'react';
import { object, func, element } from 'prop-types';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {popperBorderColor} from './colors';

const styles = theme => ({
    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrowContainer': {
            top: 0,
            transform: 'translateY(-15%) rotate(135deg)' 
        },
    },
    arrowContainer: {
        position: 'absolute',
        fontSize: 5,
        width: '3em',
        height: '3em',
        margin: '-0.8em 0em',
        '&::before': {
            content: '',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        }
    },
    arrow: {
        display: 'block',
        height: '3em',
        width: '3em',
        border: `solid 1px ${popperBorderColor}`,
        borderRadius: 3,
        borderTop: 'none',
        borderRight: 'none',
        backgroundColor: theme.palette.common.white
    }
});

const PopperWithArrow = ({anchorEl, onClose, content, classes}) => {
    const [arrowRef, handleArrowRef] = useState(null);
    return (
        <Popper
            open = {!!anchorEl} 
            anchorEl = {anchorEl} 
            onClose = {onClose}
            placement = 'bottom'
            disablePortal = {false}
            modifiers = {{
                flip: {
                    enabled: false,
                },
                preventOverflow: {
                    enabled: true,
                    boundariesElement: 'scrollParent',
                },
                arrow: {
                    enabled: true,
                    element: arrowRef
                },
                offset: {
                    offset: '0, 9'
                }
            }}
            className = {classes.popper}
        >
            <ClickAwayListener onClickAway = {onClose} mouseEvent = 'onMouseDown'>
                <div>
                    <span className={classes.arrowContainer} ref = {handleArrowRef}>
                        <i className={classes.arrow} />
                    </span>
                    {content}
                </div>
            </ClickAwayListener>
        </Popper>
    );
};

PopperWithArrow.propTypes = {
    anchorEl: object,
    onClose: func.isRequired,
    content: element.isRequired
};

export default withStyles(styles)(PopperWithArrow);
