import React, {Component} from 'react';
import Item from '../Item/Item.js';
import AgregarItem from '../AgregarItem/AgregarItem.js'



export default class ListaTODO extends Component{
    constructor(){
        super();

        this.state = {
            TODOS: []
        };

        this.manejadorAgregar = this.agregarALista.bind(this);
        this.manejadorEliminar = this.eliminarDeLista.bind(this);

    }

    agregarALista(nuevoItem){


        let aux = this.state.TODOS;
        aux.push(nuevoItem);
        this.setState({TODOS: aux});
        console.log(nuevoItem.id);
    }

    eliminarDeLista(idItem){

        const aux = Array.from(this.state.TODOS);
        const nuevoState = aux.filter(item => item.id !== idItem);
        this.setState({TODOS: nuevoState});
    }


    render(){

        const lista = this.state.TODOS.map((valor, index , array) => {
            return <Item datosItem={valor} key={valor.id} eliminar={this.manejadorEliminar}/>
        });
        
        return(
            <section className="container">
                <h1 className="text-center">Lista de Tareas</h1>
                <div className='row'>
                    <article className="col-12"> 
                        <AgregarItem agregar={this.manejadorAgregar}/>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className="text-center row">
                                    <th className="col-4">Nombre</th>
                                    <th className="col-4">Descripcion</th>
                                    <th className="col-2">Fecha</th>
                                    <th className="col-2"></th>
                                </tr>
                            </thead>
                            {lista} 
                        </table>
                    </article>
                </div>
            </section>
        );
    }
}