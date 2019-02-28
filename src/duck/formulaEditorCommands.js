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
import {last, curry} from 'ramda';
import { isFirefox } from './formulaEditorBrowserUtils';

const formulaHTMLForFirefox = 
    `<div class = "formula-editor-formula" style = "display: inline-block; vertical-align: text-top">
        <div class = "formula-editor-formula-super" style = "font-size: 65%; line-height: 100%; min-height: 10px">m</div>
        <div class = "formula-editor-formula-sub" style = "font-size: 65%; line-height: 100%; min-height: 10px">n</div>
    </div>&nbsp;`;

const formulaHTMLForOtherBrowsers = 
    `<div class = "formula-editor-formula" style = "display: inline-block; vertical-align: text-top">
        <div class = "formula-editor-formula-super" style = "font-size: 65%; line-height: 100%; min-height: 10px"></div>
        <div class = "formula-editor-formula-sub" style = "font-size: 65%; line-height: 100%; min-height: 10px"></div>
    </div>&nbsp;`;

const changeToFormula = event => {
    event.preventDefault(); 
    insertFormula();
    setCursorPosition();
    saveEditorValue();    
};

const insertFormula = () => {
    const selection = window.getSelection();
    const range = window.getSelection().getRangeAt(0);
    range.insertNode(createFormulaElement());
    selection.removeAllRanges();
    selection.addRange(range);
};

const createFormulaElement = () => {
    const template = document.createElement('template'); 
    template.innerHTML = isFirefox() ? formulaHTMLForFirefox : formulaHTMLForOtherBrowsers;
    return template.content;
};

const setCursorPosition = () => {
    const superscriptElement = document.getElementsByClassName('formula-editor-formula-sub');
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(last(superscriptElement), 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};

const saveEditorValue = () => document.execCommand('insertHTML', false, ''); // execCommand fires onChange while other html manipulation not. 

const addSimpleStyle = (event, style) => {
    event.preventDefault(); 
    document.execCommand(style, false);
};

const addCharacter = curry((character, event) => {
    event.preventDefault();
    document.execCommand('insertHTML', false, character);
});

export { changeToFormula, addCharacter, addSimpleStyle };