import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '@/components/css/TaskForm.css';

const TaskForm = ({ lista, setLista }) => {
    // Estado para capturar dato del formulario
    const [tarea, setTarea] = useState("");

    // Función para guardar tarea en la lista
    const gestionarGuardado = (e) => {
        e.preventDefault();
        if (tarea.trim() === "") return;

        // Constante que define tarea nueva con asignación de id
        const nuevaTarea = {
            id: uuidv4(),
            texto: tarea
        }

        // Actualiza la lista de tareas (incorporando la tarea nueva) y limpia el estado "tarea"
        setLista([...lista, nuevaTarea]);
        setTarea("");
    };

    return (
        <section className="taskform">
            <h3 className="subtitulo">Agregar una nueva tarea:</h3>
            <form>
                <input
                    className="taskform-input"
                    type="text"
                    placeholder="(máximo 50 caracteres)"
                    value={tarea}
                    maxLength={50}
                    onChange={(e) => setTarea(e.target.value)}
                    required
                />
                <button
                    className="taskform-btn"
                    type="submit"
                    onClick={gestionarGuardado}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </section>
    );
};

export default TaskForm;