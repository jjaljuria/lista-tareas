import React, {Component} from 'react';
import Item from '../Item/Item.js';
import AgregarItem from '../AgregarItem/AgregarItem.js'
import store from '../store/store';


export default class ListaTODO extends Component{
    constructor(){
        super();

        this.state = {
            TODOS: []
        };

        store.subscribe( () => {
            this.setState(store.getState());
        });

    }


    render(){

        const lista = this.state.TODOS.map((valor, index , array) => {
            return <Item datosItem={valor} key={valor.id}/>
        });
        
        return(
            <section className="container">
                <h1 className="text-center">Lista de Tareas</h1>
                <div className='row'>
                    <article className="col-12"> 
                        <AgregarItem/>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr className="text-center row">
                                    <th className="col-4">Nombre</th>
                                    <th className="col-4">Descripcion</th>
                                    <th className="col-2">Fecha</th>
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
}