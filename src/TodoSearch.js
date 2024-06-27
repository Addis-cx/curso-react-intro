import React from 'react';
import './Style/TodoSearch.css'

function TodoSearch() {
    const [ searchValue, setsearchValue] = React.useState("");
    console.log("las usuarias buscan " + searchValue)
    return (
        <input placeholder="Cortar cebolla" className='TodoSearch'
        value = {searchValue}
        onChange= {(event) => {
            setsearchValue(event.target.value)
        }}/>
    );
  }

  export { TodoSearch };