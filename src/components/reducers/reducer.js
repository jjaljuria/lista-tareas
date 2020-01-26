function todos(state = [], action){

    const aux = state;
    switch(action.type){

        case 'AGREGAR':
            
            aux.TODOS.push({
                id : action.id,
                nombre: action.nombre,
                descripcion: action.descripcion,
                fecha: action.fecha
            });
            console.log(aux);
            return aux;
        case 'ELIMINAR':

            const nuevoState = { TODOS: aux.TODOS.filter(item => item.id !== action.id)};
            console.log(nuevoState);
            return nuevoState;
        default:
            return state;
    }
}

export default todos;