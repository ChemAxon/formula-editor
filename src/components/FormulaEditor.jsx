
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
import {string, func} from 'prop-types';
import FormulaEditorContainer from './FormulaEditorContainer';
import {Provider} from 'react-redux';
import store from '../duck/rootStore';

const FormulaEditor = props => (
    <Provider store = {store}>
        <FormulaEditorContainer {...props}/>
    </Provider>
);

FormulaEditor.propTypes = {
    editorValue: string.isRequired,
    placeholder: string,
    onChange: func.isRequired
};

export default FormulaEditor;
