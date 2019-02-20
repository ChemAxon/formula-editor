import React, { Component } from 'react';
import FormulaEditor from './components/FormulaEditor';

class FormulaEditorDemo extends Component {

    state = {
        editorValue: ''
    };

    handleChange = event => this.setState({editorValue: event.target.value});

    render() {
        return (
            <FormulaEditor 
                editorValue = {this.state.editorValue}
                onChange = {this.handleChange}
                placeholder = {'Start typing...'}
            />
        );
    }
}

export default FormulaEditorDemo;



