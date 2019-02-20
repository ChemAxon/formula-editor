import {createStore, compose, combineReducers} from 'redux';
import formulaEditor from './formulaEditorReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = process.env.NODE_ENV === 'development' ? composeEnhancers() : null;

const store = createStore(combineReducers({formulaEditor}), enhancers);

export default store;