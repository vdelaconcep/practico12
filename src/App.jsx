import { useState, useEffect } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import '@/App.css';

function App() {
  const [lista, setLista] = useState([]);
  const [listaCargada, setListaCargada] = useState(false);

  useEffect(() => {
    const listaGuardada = localStorage.getItem('lista');
    if (listaGuardada) {
      setLista(JSON.parse(listaGuardada));
    }
    setListaCargada(true);
  }, []);

  useEffect(() => {
    if (listaCargada) {
      localStorage.setItem('lista', JSON.stringify(lista));
    }
  }, [lista, listaCargada]);

  return (
    <>
      <TaskForm lista={lista} setLista={setLista} />
      <TaskList lista={lista} />
      {lista.length === 0 && <h1>Todavía no hay tareas en la lista</h1>}
    </>
  );
}

export default App;
