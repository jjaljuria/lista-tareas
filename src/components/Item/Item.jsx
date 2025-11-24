import { useState } from 'react';
import store from '../store/store';

export default function Item({ datos: { id, nombre, descripcion, fecha } }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const manejadorEliminar = () => {
        setIsChecked(true); // Marca el checkbox inmediatamente
        setIsFading(true);  // Inicia la animación de desvanecimiento

        setTimeout(() => {
            store.dispatch({
                type: 'ELIMINAR',
                id
            });
        }, 500); // Retraso de 500ms antes de eliminar
    }

    return (
        <tr className={`row text-center ${isFading ? 'completing-task' : ''}`}>
            <td className="col text-break">{nombre}</td>
            <td className="col text-break">{descripcion}</td>
            <td className="col text-break">{fecha}</td>
            <td className="col-2 d-flex justify-content-center align-items-center">
                <input
                    onChange={manejadorEliminar}
                    className="custom-check-input form-check-input"
                    type="checkbox"
                    id={`checkbox-${id}`} // Usar un ID único
                    checked={isChecked}    // Controlar el estado del checkbox
                    aria-label="check-remove"
                    readOnly={isChecked}   // Evita clics adicionales mientras se procesa
                />
            </td>
        </tr>
    );
}
