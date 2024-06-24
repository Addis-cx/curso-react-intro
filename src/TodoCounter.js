import './Style/TodoCounter.css'
// const styles = {
//   backgroundColor: "red"
// }

function TodoCounter( { total, complet} ) {
    return (
      <h1 style={{
        // backgroundColor: "red",
        // textAlign: "24px",
        // margin: 0,
        // padding: "48px"
      }}>
        Has completado { complet } de { total } TODOS
      </h1>
    );
  }

  export { TodoCounter };