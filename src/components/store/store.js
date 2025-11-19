import { createStore } from 'redux';
import reducer from '../../reducers/reducer';


const inicial = {
    TODOS: []
}

const foreignState = JSON.parse(localStorage.getItem('lista-tareas-react-data'));
const globalState = foreignState || inicial

const store = createStore(reducer, globalState);

export default store;