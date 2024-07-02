import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [ todos, saveTodos] = useLocalStorage('TODOS_V1', []);  
  const [ searchValue, setsearchValue] = React.useState("");
  const totalTodos = todos.length;

  const completedTodos = todos.filter( 
    todo => !!todo.completed
  ).length;  
  
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
        />
      <TodoSearch
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      />
      
      <TodoList>
        {todoSearched.map(todo => (
          <TodoItem 
          key={todo.text}
          text= {todo.text} 
          completed= {todo.completed}
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

// // const defaultTodos = [ 
// //   { text:"Hola", completed:false }, 
// //   { text:"Hola Dani", completed:true },
// //   { text:"Estamos aprendiendo React", completed:false },
// //   { text:"triste", completed:true } 
// // ]