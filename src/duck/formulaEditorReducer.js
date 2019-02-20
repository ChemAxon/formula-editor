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