import React, { useState } from 'react';
import './ListaDeTarefas.css';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function handleChange(event) {
    setTarefa(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (tarefa.trim() !== '') {
      setLista([...lista, tarefa]);
      setTarefa('');
    }
  }

  return (
    <div className="tarefa-container">
      <h2>Minha Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={handleChange}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;