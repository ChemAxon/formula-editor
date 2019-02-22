# Formula Editor
React based rich text editor for chemical formula

[Demo page](https://formula-editor-demo.herokuapp.com/)

## Install
```
npm install formula-editor
```

## Usage
```javascript
import React, { Component } from 'react';
import FormulaEditor from 'formula-editor';

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
```

## Available props
| prop        | type   | description                       |
|-------------|--------|-----------------------------------|
| editorValue | string | Content of the editor             |
| onChange    | func   | called whenever innerHTML changes |
| placeholder | string | placeholder                       |