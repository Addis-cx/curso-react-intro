import './Style/TodoItem.css';

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.complet && "Icon-check--active"}`}>V </span>
        <p className={`TodoItem-p ${props.complet && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className='Icon-delete'>X</span>
      </li>
    );
  }

export { TodoItem };