import React, { Component, Fragment } from 'react';
import FormulaEditor from '../src/components/FormulaEditor';

class FormulaEditorDemo extends Component {

    state = {
        editorValue: ''
    };

    handleChange = event => this.setState({editorValue: event.target.value});

    render() {
        return (
            <Fragment>
                <FormulaEditor
                    editorValue = {this.state.editorValue}
                    onChange = {this.handleChange}
                    placeholder = {'Start typing...'}
                />
                <br/>
                <FormulaEditor
                    editorValue = 'This editor is disabled, because it did not receive onChange'
                />
            </Fragment>
        );
    }
}

export default FormulaEditorDemo;



