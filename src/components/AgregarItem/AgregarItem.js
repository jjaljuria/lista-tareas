import React, {Component} from 'react';
import moment from 'moment';
import store from '../store/store';

export default class AgregarItem extends Component{

    constructor(props){

        super(props);

        this.manejadorFormulario = this.ValidarTarea.bind(this);
        this.manejadorFecha = this.validarFecha.bind(this);

        this.refFecha = React.createRef();
        this.state = {fecha: '', id: 0};
    }

    ValidarTarea(event){

        event.preventDefault();
        
        let nombre = event.target.children[1];//input text debajo del boton con el nombre
        let descripcion = event.target.children[2];//input text con la descripcion
        let fecha= event.target.children[3];// input text con la fecha

        //pasa los datos al padre
        store.dispatch({
            type: 'AGREGAR',
            id: this.state.id,
            nombre: nombre.value,
            descripcion: descripcion.value,
            fecha: fecha.value
        });

        this.setState({id: this.state.id + 1});
        nombre.value = '';
        descripcion.value = '';
        fecha.value = this.state.fecha;
    }

    componentDidMount(){
        this.setState({fecha: moment().format('YYYY-MM-DD')});
        this.refFecha.current.value = moment().format('YYYY-MM-DD');
    }

    validarFecha(evento){
       if(evento.target.value === ''){
           evento.target.value = this.state.fecha;
       }

       if(evento.target.value < this.state.fecha){
           evento.target.value = this.state.fecha;
           alert('No puede ser una fecha pasada');
       }
    }

    render(){

        return(
            <form className="d-flex flex-column flex-md-row justify-content-center my-4 row mx-1" onSubmit={this.manejadorFormulario}>
                <button type="submit" className="btn btn-primary order-4 order-md-1 mr-md-2 col-12 col-md-2">Agregar Tarea</button>
                <input type="text" placeholder="Nombre" className="order-1 mb-2 mb-md-0 mr-md-2 col-12 col-md-3 form-control" required maxLength="50"></input>
                <input type="text" placeholder="Descripcion" className="order-2 mb-2 mb-md-0 mr-md-2 col-12 col-md-3 form-control" required maxLength="50"></input>
                <input type="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" placeholder="Fecha" className="order-3 mb-2 mb-md-0 col-12 col-md-3 form-control" ref={this.refFecha} onChange={this.manejadorFecha}></input>
            </form>
        );
    }
}