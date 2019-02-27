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
import {CHANGE_FORMULA_EDITOR_FOCUS, GET_FORMULA_EDITOR_STYLE, CHANGE_FORMULA_EDITOR_BUTTON_STATE, CHANGE_SYMBOL_POPOVER_STATE, CHANGE_EMOJI_POPOVER_STATE} from './formulaEditorActionTypes';
import findStyle from './formulaEditorStyleUtil';

const changeFocusAction = focused => ({type: CHANGE_FORMULA_EDITOR_FOCUS, focused});
const getStyleAction = () =>({type: GET_FORMULA_EDITOR_STYLE, styles: findStyle()});
const changeButtonStateAction = format => ({type: CHANGE_FORMULA_EDITOR_BUTTON_STATE, format});
const changeSymbolPopoverStateAction = eventTarget => ({type: CHANGE_SYMBOL_POPOVER_STATE, symbolPopoverAnchor: eventTarget});
const changeEmojiPopoverStateAction = eventTarget => ({type: CHANGE_EMOJI_POPOVER_STATE, emojiPopoverAnchor: eventTarget});

export {changeFocusAction, getStyleAction, changeButtonStateAction, changeSymbolPopoverStateAction, changeEmojiPopoverStateAction};