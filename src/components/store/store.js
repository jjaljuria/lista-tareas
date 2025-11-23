import { create } from 'zustand'

const useTodoStore = create((set) => ({
    TODOS: [],
    add: (task) => set((state) => ({ TODOS: [...state.TODOS, task] })),
    remove: (id) => set((state) => ({ TODOS: state.TODOS.filter((x) => x.id !== id) }))
}))

const store = {
    getState: () => useTodoStore.getState(),
    dispatch: (action) => {
        switch (action.type) {
            case 'AGREGAR':
                useTodoStore.getState().add({
                    id: action.id,
                    nombre: action.nombre,
                    descripcion: action.descripcion,
                    fecha: action.fecha
                })
                break
            case 'ELIMINAR':
                useTodoStore.getState().remove(action.id)
                break
        }
    },

    subscribe: (listener) => {
        const unsubscribe = useTodoStore.subscribe((state) => listener(state))
        return unsubscribe
    },

    useStore: useTodoStore
}

export default store