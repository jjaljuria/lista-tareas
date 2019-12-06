import {createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer';

const inicial = {
    TODOS: []
}

const store = createStore(reducer, inicial);

export default store;