import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [ 
  { text:"Hola", completed:false }, 
  { text:"Hola Dani", completed:true },
  { text:"Estamos aprendiendo React", completed:false },
  { text:"triste", completed:true } 
]

function App() {
  const [ todos, setTodos] = React.useState(defaultTodos);  
  const [ searchValue, setsearchValue] = React.useState("");

  const completedTodos = todos.filter( 
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;
  const todoSearched = todos.filter( 
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
        {todoSearched.map(todo => (
          <TodoItem 
          key={todo.text}
          text= {todo.text} 
          completed= {todo.complete}
          onComplete= {() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
