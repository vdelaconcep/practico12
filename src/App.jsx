import { useState, useEffect } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import Footer from '@/components/Footer';
import '@/App.css';

function App() {
  // Estado que guarda lista de tareas
  const [lista, setLista] = useState([]);

  // Estado para determinar si se cargaron las tareas en la página
  const [listaCargada, setListaCargada] = useState(false);

  // Efecto que carga la lista guardada en localStorage al renderizar la app
  useEffect(() => {
    const listaGuardada = localStorage.getItem('lista');
    if (listaGuardada) {
      setLista(JSON.parse(listaGuardada));
    }
    setListaCargada(true);
  }, []);

  // Efecto que actualiza la lista del localStorage cuando se actualiza el estado "lista"
  useEffect(() => {
    if (listaCargada) {
      localStorage.setItem('lista', JSON.stringify(lista));
    }
  }, [lista, listaCargada]);

  return (
    <main>
      <section className='app-section'>
        <h1 className='titulo-principal'>Lista de tareas pendientes</h1>
        <TaskForm lista={lista} setLista={setLista} />
        <TaskList lista={lista} setLista={setLista} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
