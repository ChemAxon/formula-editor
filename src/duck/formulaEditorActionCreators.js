import {CHANGE_FORMULA_EDITOR_FOCUS, GET_FORMULA_EDITOR_STYLE, CHANGE_FORMULA_EDITOR_BUTTON_STATE} from './formulaEditorActionTypes';
import findStyle from './formulaEditorStyleUtil';

const changeFocusAction = focused => ({type: CHANGE_FORMULA_EDITOR_FOCUS, focused});
const getStyleAction = () =>({type: GET_FORMULA_EDITOR_STYLE, styles: findStyle()});
const changeButtonStateAction = format => ({type: CHANGE_FORMULA_EDITOR_BUTTON_STATE, format});

export {changeFocusAction, getStyleAction, changeButtonStateAction};