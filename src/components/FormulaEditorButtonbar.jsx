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
import { bool, func, element } from 'prop-types';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { withStyles } from '@material-ui/core/styles';
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
        paddingLeft: 8,
        backgroundColor: 'white'
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

const FormulaEditorButtonbar = ({isItalic, isSubscript, isSuperscript, isSymbol, isEmoji, addSimpleFormat, addFormula, onSymbolClick, symbolPopover, onEmojiClick, emojiPopover, classes}) => (
    <div className = {classes.root} >
        <SquareButton onMouseDown = { addSimpleFormat('italic') } focused = {isItalic} icon = {<FormatItalicIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { addSimpleFormat('subscript') } focused = {isSubscript} icon = {<img src = {subscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { addSimpleFormat('superscript') } focused = {isSuperscript} icon = {<img src = {superscripticon} className = {classes.iconRoot} alt = '' />} classes = {{root: classes.squareButtonRoot}}/>
        <VerticalDivider classes = {{root: classes.divider}}/>
        <SquareButton onMouseDown = { addFormula }  icon = {<img src = {supersubscripticon} className = {classes.iconRoot} alt = ''/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { onSymbolClick }  focused = {isSymbol} icon = {<div dangerouslySetInnerHTML = {{__html: '&#120512;'}}/>} classes = {{root: classes.squareButtonRoot}}/>
        <SquareButton onMouseDown = { onEmojiClick } focused = {isEmoji} icon = {<InsertEmoticonIcon classes = {{root: classes.iconRoot}}/>} classes = {{root: classes.squareButtonRoot}}/>
        {symbolPopover}
        {emojiPopover}
    </div>
);

FormulaEditorButtonbar.propTypes = {
    isItalic: bool,
    isSubscript: bool,
    isSuperscript: bool,
    isSymbol: bool,
    addSimpleFormat: func.isRequired,
    addFormula: func.isRequired,
    onSymbolClick: func.isRequired,
    symbolPopover: element.isRequired
};

export default withStyles(styles)(FormulaEditorButtonbar);
