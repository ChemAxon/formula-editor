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
import createReducer from './createReducer';
import { evolve, includes, equals, not } from 'ramda';
import { CHANGE_FORMULA_EDITOR_FOCUS, GET_FORMULA_EDITOR_STYLE, CHANGE_FORMULA_EDITOR_BUTTON_STATE } from './formulaEditorActionTypes';

const initialState = {
    focused: false,
    isItalic: false,
    isSubscript: false,
    isSuperscript: false,
    isFormula: false
};

const changeFocus = (state, action) => 
    evolve({
        focused: () => action.focused
    }, state);

const getStyle = (state, action) =>
    evolve({
        isItalic: () => includes('I', action.styles),
        isSuperscript: () => includes('SUP', action.styles),
        isSubscript: () => includes('SUB', action.styles),
    }, state);

const changeButtonState = (state, action) =>
    evolve({
        isItalic: () => equals(action.format, 'italic') ? not(state.isItalic) : state.isItalic,
        isSubscript: () => equals(action.format, 'subscript') ? not(state.isSubscript) : state.isSubscript,
        isSuperscript: () => equals(action.format, 'superscript') ? not(state.isSuperscript) : state.isSuperscript,
    }, state);

const actionHandlers = {
    [CHANGE_FORMULA_EDITOR_FOCUS]: changeFocus,
    [GET_FORMULA_EDITOR_STYLE]: getStyle,
    [CHANGE_FORMULA_EDITOR_BUTTON_STATE]: changeButtonState
};

const formulaEditor = createReducer(initialState, actionHandlers);

export default formulaEditor;