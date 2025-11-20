import { useEffect, useState } from 'react'

import Item from './components/Item/Item.jsx';
import AgregarItem from './components/AgregarItem/AgregarItem.jsx'
import store from './components/store/store.js';


export default function App() {

    const [TODOS, setTODOS] = useState([]);

    useEffect(() => {
        // Cargar estado inicial desde localStorage
        const storedState = JSON.parse(localStorage.getItem('lista-tareas-react-data'));
        if (storedState && storedState.TODOS) {
            setTODOS(storedState.TODOS);
        }

        // Suscribirse a los cambios del store de Redux
        const unsubscribe = store.subscribe(() => {
            const globalState = store.getState();
            setTODOS(globalState.TODOS); // Asegurarse de que `globalState.TODOS` es el array esperado
            localStorage.setItem('lista-tareas-react-data', JSON.stringify(globalState));
        });

        // Función de limpieza para desuscribirse cuando el componente se desmonte
        return () => {
            unsubscribe();
        };
    }, []); // El array vacío asegura que este efecto se ejecuta solo una vez al montar


    const lista = TODOS.map((valor) => {
        return <Item datosItem={valor} key={valor.id} />
    });

    return (
        <section className="container">
            <h1 className="text-center">Lista de Tareas</h1>
            <div className='row'>
                <article className="col-12">
                    <AgregarItem />
                    <table className="table">
                        <thead className="thead-dark">
                            <tr className="text-center row">
                                <th className="col-4 text-truncate">Nombre</th>
                                <th className="col-4 text-truncate">Descripcion</th>
                                <th className="col-2 text-truncate">Fecha</th>
                                <th className="col-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista}
                        </tbody>
                    </table>
                </article>
            </div>
        </section>
    );
}
