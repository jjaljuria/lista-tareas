import Item from './components/Item/Item.jsx';
import AgregarItem from './components/AgregarItem/AgregarItem.jsx'
import store from './components/store/store.js';


export default class ListaTODO extends Component {
    constructor() {
        super();

        this.state = {
            TODOS: []
        };

        store.subscribe(() => {
            const globalState = store.getState()
            this.setState(globalState);
            localStorage.setItem('lista-tareas-react-data', JSON.stringify(globalState))
        });

    }

    componentDidMount() {
        const globalState = JSON.parse(localStorage.getItem('lista-tareas-react-data'));
        this.setState(globalState);
    }


    render() {

        const lista = this.state.TODOS.map((valor, index, array) => {
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
}