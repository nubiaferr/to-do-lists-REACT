import React, { useState } from 'react';
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa';
import './Tarefa.css';

const Tarefa = ({ tarefa, onDelete, setTarefas, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [inputValue, setInputValue] = useState(tarefa);

  const onEdit = () => {
    setIsEdit(true);
  };

  const onEditing = () => {
    setTarefas((prevTarefas) => {
      prevTarefas[index] = inputValue;
      console.log(prevTarefas);
      return [...prevTarefas];
    });

    return setIsEdit(false);
  };

  const onCheck = (e) => {
    e.stopPropagation();
    return setIsCheck(!isCheck);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      onEditing();
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <li onClick={onEdit}>
        {isEdit ? (
          <div>
            <input
              type='text'
              className='tarefas'
              value={inputValue}
              onChange={inputHandler}
              onKeyPress={onKeyPressHandler}
            />
          </div>
        ) : (
          <div className={isCheck ? 'checked' : ''}>{tarefa}</div>
        )}
        <span>
          <FaCheckSquare className='check' onClick={onCheck} />
          <FaWindowClose className='delete' onClick={onDelete} />
        </span>
      </li>
    </div>
  );
};

export default Tarefa;
