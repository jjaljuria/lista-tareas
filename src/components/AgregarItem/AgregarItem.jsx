import { useState, useEffect, useRef } from 'react';
import { v7 } from 'uuid'
import moment from 'moment';
import store from '../store/store';

export default function AgregarItem() {

    const nombreRef = useRef(null);//input text debajo del boton con el nombre
    const descripcionRef = useRef(null);//input text con la descripcion
    const fechaRef = useRef(null);// input text con la fecha
    const [newTask, setNewTask] = useState({
        id: '',
        descripcion: '',
        fecha: ''
    });


    const manejadorFormulario = (e) => {

        e.preventDefault();

        const nombre = nombreRef.current.value
        const descripcion = descripcionRef.current.value
        const fecha = fechaRef.current.value

        const newId = v7()

        setNewTask({
            id: newId,
            fecha,
            descripcion
        })

        //pasa los datos al padre
        store.dispatch({
            type: 'AGREGAR',
            id: newId, // Usar el nuevo ID al despachar la acción
            nombre,
            descripcion,
            fecha,
        });

        nombreRef.current.value = '';
        descripcionRef.current.value = '';
        fechaRef.current.value = newTask.fecha;
    }

    useEffect(() => {
        const now = moment().format('YYYY-MM-DD')
        setNewTask({ ...newTask, fecha: now })
        fechaRef.current.value = now
    }, [])

    const manejadorFecha = (e) => {
        if (e.target.value === '') {
            e.target.value = newTask.fecha;
        }

        if (e.target.value < newTask.fecha) {
            e.target.value = newTask.fecha;
            alert('No puede ser una fecha pasada');
        }
    }



    return (
        <form role="form" className="d-flex flex-column flex-md-row justify-content-center my-4 row mx-1" onSubmit={manejadorFormulario}>
            <button type="submit" className="btn btn-primary order-4 order-md-1 mr-md-2 col-12 col-md-2" > Agregar Tarea</ button>
            <input type="text" placeholder="Nombre" className="order-1 mb-2 mb-md-0 mr-md-2 col-12 col-md-3 form-control" required maxLength="50" ref={nombreRef}></input>
            <input type="text" placeholder="Descripcion" className="order-2 mb-2 mb-md-0 mr-md-2 col-12 col-md-3 form-control" required maxLength="50" ref={descripcionRef}></input>
            <input type="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" placeholder="Fecha" className="order-3 mb-2 mb-md-0 col-12 col-md-3 form-control" ref={fechaRef} onChange={manejadorFecha}></input>
        </form >
    );
}
