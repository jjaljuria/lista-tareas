import { useEffect, useState, useRef } from 'react'
import Item from './components/Item/Item.jsx';
import AgregarItem from './components/AgregarItem/AgregarItem.jsx'
import store from './components/store/store.js';
import './App.css'
import CustomModal from './components/Modal/CustomModal.jsx';
import Button from 'react-bootstrap/Button';

export default function App() {

    const [TODOS, setTODOS] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    }, []); // El array vacío asegura que este efecto se ejecuta solo una vez al montar


    const lista = TODOS.map((valor) => {
        console.log({ valor })
        return <Item datos={valor} key={valor.id} />
    });



    return (
        <>
            <h1 className="text-center mb-3">Lista de Tareas</h1>
            <div className="container">
                <div className='row'>
                    <section className="col-12 col-md-6">
                        <Button variant="primary" onClick={handleShow} >
                            +
                        </Button>

                        <CustomModal show={show} onHide={handleClose}>
                            <AgregarItem />
                        </CustomModal>
                    </section>

                    <section className='col-12'>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className="text-center row">
                                    <th className="col text-truncate">Nombre</th>
                                    <th className="col text-truncate">Descripcion</th>
                                    <th className="col text-truncate">Fecha</th>
                                    <th className="col-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>

        </>
    );
}