import '@/components/components.css';

const TaskList = ({ lista, setLista }) => {

    const eliminar = (index) => {
        const listaActualizada = [...lista];
        listaActualizada.splice(index, 1);
        setLista(listaActualizada)
    }

    return (
        <>
            {lista.map((elemento, index) => (
                <div key={index}>
                    {elemento}
                    <button
                        onClick={() => eliminar(index)}
                    >
                        X
                    </button>
                </div>
            ))}
        </>
    );
};

export default TaskList;