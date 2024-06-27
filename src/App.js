import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [ 
  { text:"Hola", completed:false }, 
  { text:"Hola Dani", completed:true },
  { text:"Estamos aprendiendo React", complet:false } ]

function App() {
  const [ todos, setTodos] = React.useState(defaultTodos);  
  const [ searchValue, setsearchValue] = React.useState("");
  console.log("las usuarias buscan " + searchValue);
  const completedTodos = todos.filter( 
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
        total={completedTodos} 
        complet={totalTodos} />
      <TodoSearch
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      />
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}
          text= {todo.text} complet={todo.complet}/>)) }
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
