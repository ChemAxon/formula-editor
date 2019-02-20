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
