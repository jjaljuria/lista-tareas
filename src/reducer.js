import {combineReducers} from 'redux';

function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            const copy = Array.from(state);
            copy.push(action.playload.text);
            return copy;
        default:
            return state;
    }
}

const reducers = combineReducers({todos,});

export default reducers;