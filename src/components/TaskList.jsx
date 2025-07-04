import { v4 as uuidv4 } from 'uuid';
import '@/components/components.css';

const TaskList = ({ lista, setLista }) => {

    const eliminar = (id, div) => {

        div.classList.remove('aparecer');
        div.style.setProperty('--delay', '0ms');
        div.classList.add('eliminando');

        setTimeout(() => {
            const nuevaLista = lista.filter(item => item.id !== id);
            setLista(nuevaLista);
        }, 500);
    }

    return (
        <section className='tasklist'>
            {lista.map((elemento, index) => (
                <div
                    className='items-lista aparecer'
                    key={elemento.id}
                    style={{ '--delay': `${index * 120}ms` }}
                >
                    {elemento.texto}
                    <button
                        className='items-lista-boton'
                        onClick={(e) => eliminar(elemento.id, e.currentTarget.parentNode)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>)
            )};
            <div>
                {lista.length === 0 && <p>Todavía no hay tareas en la lista</p>}
            </div>
        </section>
    );
};

export default TaskList;
