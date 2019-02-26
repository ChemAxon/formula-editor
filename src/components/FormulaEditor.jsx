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
import React, {useReducer} from 'react';
import { func, string, bool,  } from 'prop-types';
import {identity} from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormulaEditorButtonbar from './FormulaEditorButtonbar';
import classNames from 'classnames';
import FormulaEditorInput from './FormulaEditorInput';
import { inactiveBorder, main, error } from './colors';
import PopperWithArrow from './PopperWithArrow';
import InsertContent from './InsertContent';
import symbols from '../assets/symbols';
import reducer, {initialState} from '../duck/formulaEditorReducer';
import {changeFocusAction, getStyleAction, changeButtonStateAction, changeSymbolPopoverStateAction } from '../duck/formulaEditorActionCreators';

const styles = {
    root: {
        borderRadius: 3,
        fontFamily: 'Roboto'
    },
    inactive: {
        border: `1px solid ${inactiveBorder}`,
        '&:hover': {
            border: `1px solid ${main}`
        }   
    },
    focused: {
        border: `2px solid ${main}`
    },
    error: {
        border: `1px solid ${error}`
    },
    errorFocused: {
        border: `2px solid ${error}`
    }
};

const FormulaEditor = ({editorValue, placeholder, error, onChange, onFocus = identity, onBlur = identity, classes}) => {

    const [{focused, isItalic, isSubscript, isSuperscript, isSymbol, symbolPopoverAnchor}, dispatch] = useReducer(reducer, initialState);
    const changeFocus = isFocused => dispatch(changeFocusAction(isFocused));
    const getStyle = () => dispatch(getStyleAction());
    const changeButtonState = format => dispatch(changeButtonStateAction(format));
    const changeSymbolPopoverState = eventTarget => dispatch(changeSymbolPopoverStateAction(eventTarget));

    const onFocusWrapped = () => { changeFocus(true); onFocus(); }; 
    const onBlurWrapped = () => { changeFocus(false); onBlur(); };
    const changeSymbolPopoverStateWrapper = (event, isClose) => { 
        event.preventDefault(); 
        // changeSymbolPopoverState(isClose ? null : event.target); 
        changeButtonState('symbol');
    };

    return (
        <div onFocus = {onFocusWrapped } onBlur = {onBlurWrapped} className = {classNames(classes.root, error && focused ? classes.errorFocused : error ? classes.error : focused ? classes.focused : classes.inactive)}> 
            <FormulaEditorInput
                editorValue = {editorValue}
                onChange = {onChange}
                placeholder = {placeholder}
                focused = {focused}
                error = {error}
                onMouseUp = {getStyle}
                onKeyUp = {getStyle}
            />
            <Collapse in = {focused} >
                <FormulaEditorButtonbar
                    changeButtonState = {changeButtonState}
                    isItalic = {isItalic}
                    isSubscript = {isSubscript}
                    isSuperscript = {isSuperscript}
                    isSymbol = {isSymbol}
                    onSymbolClick = {changeSymbolPopoverStateWrapper}
                    symbolPopover = {
                        <PopperWithArrow
                            anchorEl = {symbolPopoverAnchor} 
                            onClose = {event => changeSymbolPopoverStateWrapper(event, true)}
                            content = {<InsertContent characterList = {symbols}/>}
                        />
                    }
                />
            </Collapse>
        </div>
    );
};

FormulaEditor.propTypes = {
    editorValue: string.isRequired,
    placeholder: string,
    focused: bool,
    error: bool,
    onChange: func.isRequired,
    onFocus: func,
    onBlur: func
};

export default withStyles(styles)(FormulaEditor);
