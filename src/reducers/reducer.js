function todos(state = [], action) {

    const aux = [...state.TODOS];
    switch (action.type) {

        case 'AGREGAR':

            aux.push({
                id: action.id,
                nombre: action.nombre,
                descripcion: action.descripcion,
                fecha: action.fecha
            });
            console.log({ aux });
            return { TODOS: aux };
        case 'ELIMINAR':

            const nuevoState = { TODOS: aux.filter(item => item.id !== action.id) };
            console.log(nuevoState);
            return nuevoState;
        default:
            return state;
    }
}

export default todos;