# Formula Editor
React based rich text editor for chemical formula

[Demo page](https://formula-editor-demo.herokuapp.com/)

## Install
```
npm install formula-editor
```

## Usage
```javascript
import React, { useState } from 'react';
import FormulaEditor from 'formula-editor';

const FormulaEditorDemo = () => {

    const [editorValue, changeEditorValue] = useState('');

    return (
        <FormulaEditor 
            editorValue = {editorValue}
            onChange = {event => changeEditorValue(event.target.value)}
            placeholder = {'Start typing...'}
        />
    );
};
```

## Available props
| prop        | type   | description                               |
|-------------|--------|-------------------------------------------|
| editorValue | string | Content of the editor                     |  
| placeholder | string | placeholder                               |
| onChange    | func   | called whenever innerHTML changes         |
| onFocus     | func   | called whenever editor input gets focus   |
| onBlur      | func   | called whenever editor input looses focus |