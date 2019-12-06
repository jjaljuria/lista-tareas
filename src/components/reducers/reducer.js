import {combineReducers} from 'redux';

function todos(state = [], action){
    switch(action.type){
        case 'AGREGAR':
            const aux = Array.from(state);
            aux.push(action.payload.item);
            return aux;
    }
}

export default todos;