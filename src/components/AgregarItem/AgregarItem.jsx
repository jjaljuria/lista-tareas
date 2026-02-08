import { useState, useEffect, useRef } from 'react';
import { v7 } from 'uuid'
import moment from 'moment';
import store from '../store/store';

export default function AgregarItem({onAdded}) {

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

        const form = e.target
        if(!form.checkValidity()){
            form.reportValidity()
            return;
        }

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

        if(onAdded) onAdded()
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
        <form noValidate role="form" className="my-1 mx-1" onSubmit={manejadorFormulario}>
            <div className="row">
                <input type="text" placeholder="Nombre" className="col-12 col-md-3 form-control" required maxLength="50" ref={nombreRef}></input>
                <input type="text" placeholder="Descripcion" className="col-12 col-md-3 form-control" required maxLength="50" ref={descripcionRef}></input>
                <input type="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" placeholder="Fecha" className="mb-2 mb-md-0 col-12 col-md-3 form-control" ref={fechaRef} onChange={manejadorFecha}></input>
                <button type="submit" className="btn btn-primary mt-3" > Agregar Tarea</ button>
            </div>
        </form >
    );
}