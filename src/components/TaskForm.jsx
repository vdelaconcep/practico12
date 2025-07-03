import { useState } from "react";

const TaskForm = ({ lista, setLista }) => {
    const [tarea, setTarea] = useState("");

    const handleGuardar = (e) => {
        e.preventDefault();
        if (tarea.trim() === "") return;

        setLista([...lista, tarea]);
        setTarea("");
    };

    return (
        <>
            <h1>TaskForm</h1>
            <form>
                <input
                    type="text"
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                />
                <button type="submit" onClick={handleGuardar}>
                    Guardar
                </button>
            </form>
        </>
    );
};

export default TaskForm;