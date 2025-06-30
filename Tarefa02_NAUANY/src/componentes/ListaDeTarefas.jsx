import React, { useState } from 'react';
import '../componentes/ListaDeTarefas.css';

export default function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function handleChange(e) {
    setTarefa(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (tarefa.trim() === '') return;
    const nova = { texto: tarefa, status: 'pendente' };
    setLista([...lista, nova]);
    setTarefa('');
  }

  function alterarStatus(index, status) {
    const novaLista = [...lista];
    novaLista[index].status = status;
    setLista(novaLista);
  }

  function mover(index, direcao) {
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= lista.length) return;
    const novaLista = [...lista];
    const temp = novaLista[index];
    novaLista[index] = novaLista[novoIndex];
    novaLista[novoIndex] = temp;
    setLista(novaLista);
  }

  return (
    <div className="tarefa-container">
      <h2>Gerenciador de Tarefas</h2>
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
          <li key={index} className="item-tarefa">
            <div className="botoes-mover">
              <button onClick={() => mover(index, -1)}>↑</button>
              <button onClick={() => mover(index, 1)}>↓</button>
            </div>
            <span>{item.texto} - <strong>{item.status}</strong></span>
            <div className="botoes-status">
              <button onClick={() => alterarStatus(index, 'pendente')}>Pendente</button>
              <button onClick={() => alterarStatus(index, 'realizada')}>Realizada</button>
              <button onClick={() => alterarStatus(index, 'não realizada')}>Não Realizada</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

