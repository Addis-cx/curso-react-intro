import './Style/CreateTodoButton.css'

function CreateTodoButton() {
    return (
    <button type="button" className='CreateTodoButton' onClick={(event) => {
      console.log("apretaste el button >:-(")
      console.log(event)
      console.log(event.target)
    }}>+</button>
    );
  }

export { CreateTodoButton };