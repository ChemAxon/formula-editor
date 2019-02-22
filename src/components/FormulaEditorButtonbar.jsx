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
import { bool, func } from 'prop-types';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import {addSimpleStyle, changeToFormula, addArrow} from '../duck/formulaEditorCommands';
import SquareButton from './SquareButton';
import VerticalDivider from './VerticalDivider';
import subscripticon from './images/subscript.svg';
import superscripticon from './images/superscript.svg';
import supersubscripticon from './images/supersubscript.svg';
import { inactiveBorder, buttonBorder } from './colors';

const styles = {
    root: {
        borderTop: `1px solid ${inactiveBorder}`,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 8
    },
    buttonSize: {
        height: 32,
        width: 32 
    },
    squareButtonRoot: {
        marginRight: 3
    },
    iconRoot: {
        height: 23
    },
    divider: {
        height: 20,
        borderColor: buttonBorder,
        marginLeft: 8,
        marginRight: 8
    }
};

const FormulaEditorButtonbar = ({isItalic, isSubscript, isSuperscript, changeButtonState, classes}) => {

    const onItalicClick = event => {addSimpleStyle(event, 'italic'); changeButtonState('italic'); };
    const onSubscriptClick = event => {addSimpleStyle(event, 'subscript'); changeButtonState('subscript'); };
    const onSuperscriptClick = event => {addSimpleStyle(event, 'superscript'); changeButtonState('superscript'); };

    return(
        <div className = {classes.root} >
            <SquareButton onMouseDown = { onItalicClick } focused = {isItalic} icon = {<FormatItalicIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/>
            <SquareButton onMouseDown = { onSubscriptClick } focused = {isSubscript} icon = {<img src = {subscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
            <SquareButton onMouseDown = { onSuperscriptClick } focused = {isSuperscript} icon = {<img src = {superscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
            <VerticalDivider classes = {{root: classes.divider}}/>
            <SquareButton onMouseDown = { changeToFormula }  icon = {<img src = {supersubscripticon} className = {classes.iconRoot} alt = ''/>} classes = {{root: classes.squareButtonRoot}}/>
            <SquareButton onMouseDown = { addArrow }  icon = {<ArrowForwardIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/>
        </div>
    );
};

FormulaEditorButtonbar.propTypes = {
    isItalic: bool,
    isSubscript: bool,
    isSuperscript: bool,
    isFormula: bool,
    changeButtonState: func.isRequired
};

export default withStyles(styles)(FormulaEditorButtonbar);
