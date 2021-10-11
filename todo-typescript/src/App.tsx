import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import ListItem  from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  const handleDelete = (id: Number) => {
    setList (list.filter(item => item.id !== id));
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {/* Area pro input */}
        <AddItem onEnter={handleAddTask} />

        {/* Lista de tasks */}
        {list.map((item) => (
          <ListItem key={item.id} item={item} onDelete={handleDelete}/>
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App
