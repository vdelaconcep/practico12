import '@/components/components.css';

const TaskList = ({ lista, setLista }) => {

    const eliminar = (index) => {
        const listaActualizada = [...lista];
        listaActualizada.splice(index, 1);
        setLista(listaActualizada)
    }

    return (
        <section className='tasklist'>
            {lista.map((elemento, index) => (
                <div
                    className='items-lista'
                    key={index}>
                    {elemento}
                    <button
                        className='items-lista-boton'
                        onClick={() => eliminar(index)}
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            ))}
            <div>
                {lista.length === 0 && <p>Todavía no hay tareas en la lista</p>}
            </div>
        </section>
    );
};

export default TaskList;