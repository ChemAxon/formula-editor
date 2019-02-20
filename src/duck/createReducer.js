import { propOr, identity } from 'ramda';

const createReducer = (initialState, actionHandlers) =>
    (state = initialState, action) => propOr(identity, action.type, actionHandlers)(state, action);

export default createReducer;
