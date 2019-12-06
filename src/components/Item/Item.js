import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class Item extends Component{

    constructor(props){

        super(props);
        this.state = {datos: this.props.datosItem};
        
        this.manejadorEliminar = this.eliminarItem.bind(this);
    }

    eliminarItem(){
        this.props.eliminar(this.props.datosItem.id);
    }
    render(){
        return(
            <tr className="row text-center">
                <td className="col-4 text-break">{this.state.datos.nombre}</td>
                <td className="col-4 text-break">{this.state.datos.descripcion}</td>
                <td className="col-2 text-break">{this.state.datos.fecha}</td>
                <td className="col-2"><Button color="danger" onClick={this.manejadorEliminar}>Eliminar</Button></td>
            </tr>
        );
    }
}