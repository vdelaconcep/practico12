import gatito from '@/assets/img/gato.png'
import '@/components/css/TaskList.css';

const TaskList = ({ lista, setLista }) => {

    // Función para eliminar una tarea de la lista por id
    const eliminar = (id, div) => {

        // Cambio de clases para animación
        div.classList.remove('aparecer');
        div.style.setProperty('--delay', '0ms');
        div.classList.add('eliminando');

        // Remover tarea de la lista después de la animación
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
                        title='Eliminar'
                        onClick={(e) => eliminar(elemento.id, e.currentTarget.parentNode)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>)
            )}
            <div className='lista-vacia-div'>
                {lista.length === 0 && <>
                    <img className='lista-vacia-imagen' src={gatito} alt="Gatito" />
                    <h2 className='lista-vacia-titulo'>Todavía no hay tareas en la lista</h2>
                </>
                }
            </div>
        </section>
    );
};

export default TaskList;
