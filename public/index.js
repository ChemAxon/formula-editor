import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from '../src/serviceWorker';
import FormulaEditorDemo from './FormulaEditorDemo';

render(<FormulaEditorDemo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
