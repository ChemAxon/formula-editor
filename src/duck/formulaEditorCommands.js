import {last} from 'ramda';
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

const addSimpleStyle = (event, style) => {
    event.preventDefault(); 
    document.execCommand(style, false);
};

const addArrow = event => {
    event.preventDefault();
    document.execCommand('insertHTML', false, '&#8652');
};

export { changeToFormula, addArrow, addSimpleStyle };