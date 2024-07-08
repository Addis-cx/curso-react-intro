import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodosContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
    return (
      <h1 className='TodoCounter'>
        Has completado { completedTodos } de { totalTodos } TODOS
      </h1>
    );
  }

  export { TodoCounter };