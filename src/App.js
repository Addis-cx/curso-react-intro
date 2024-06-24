import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [ 
  { text:"Hola", complet:false }, 
  { text:"Hola Dani", complet:true },
  { text:"Estamos aprendiendo React", complet:false } ]

function App() {
  return (
    <>
      <TodoCounter total={10} complet={3} />
      <TodoSearch />
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}
          text= {todo.text} />) ) }
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
