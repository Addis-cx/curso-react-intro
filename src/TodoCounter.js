
const styles = {
  backgroundColor: "red"
}

function TodoCounter( { total, complet} ) {
    return (
      <h1 style={styles}>
        Has completado { complet } de { total } TODOS
      </h1>
    );
  }

  export { TodoCounter };