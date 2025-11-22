import store from '../store/store';

export default function Item({ datos: { id, nombre, descripcion, fecha } }) {

    const manejadorEliminar = () => {
        store.dispatch({
            type: 'ELIMINAR',
            id
        });
    }

    return (
        <tr className="row text-center">
            <td className="col-4 text-break">{nombre}</td>
            <td className="col-4 text-break">{descripcion}</td>
            <td className="col-2 text-break">{fecha}</td>
            <td className="col-2">
                <button className="btn btn-danger" onClick={manejadorEliminar} >
                    <span className="text-break">Eliminar</span>
                </button>
            </td>
        </tr>
    );
}