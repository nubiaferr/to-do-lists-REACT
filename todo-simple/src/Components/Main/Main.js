import React, { useState } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import Tarefa from '../Tarefa/Tarefa';

//2 - editar
//4 - usar useReducer
//5 - separar componentes

const Main = (props) => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const inputHandler = (e) => {
    setNovaTarefa(e.target.value);
  };

  const submitHandler = (e) => {
    if (novaTarefa.trim() === '') return;

    if (tarefas.indexOf(novaTarefa) !== -1) return alert('Tarefa já criada');

    if (tarefas.indexOf(novaTarefa === -1)) {
      setTarefas((prevTarefas) => {
        return [...prevTarefas, novaTarefa];
      });
    }

    setNovaTarefa('');
  };

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitHandler();
    }
  };

  const onDelete = (index) => {
    return setTarefas(tarefas.filter((_, indice) => indice !== index));
  };

  return (
    <div className='main'>
      <h1>Lista</h1>

      <form
        action='#'
        className='form'
        onSubmit={submitHandler}
        onKeyPress={onKeyPressHandler}
      >
        <input type='text' value={novaTarefa} onChange={inputHandler} />

        <button type='submit'>
          <FaPlus />
        </button>
      </form>

      {console.log(tarefas)}
      <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            setTarefas={setTarefas}
            index={index}
            tarefa={tarefa}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
