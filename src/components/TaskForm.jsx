import { useState } from "react";
import '@/components/components.css';

const TaskForm = ({ lista, setLista }) => {
    const [tarea, setTarea] = useState("");

    const handleGuardar = (e) => {
        e.preventDefault();
        if (tarea.trim() === "") return;

        setLista([...lista, tarea]);
        setTarea("");
    };

    return (
        <section className="taskform">
            <h3 className="subtitulo">Agregar una nueva tarea:</h3>
            <form>
                <textarea
                    type="text"
                    placeholder="(máximo 140 caracteres)"
                    value={tarea}
                    maxLength={140}
                    onChange={(e) => setTarea(e.target.value)}
                    required
                />
                <button type="submit" onClick={handleGuardar}>
                    Guardar
                </button>
            </form>
        </section>
    );
};

export default TaskForm;