import React, { useState, useEffect } from 'react';

function Hooks(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);
  const [didMount, setDidMount] = useState("")
  const {
    name
  } = props

  useEffect(() => {
    setDidMount("completado")
    return () => {
      alert("Desmontando")
    }
  }, [])
  useEffect(() => {
    alert("actualizado")
  }, [count])

  return (
    <React.Fragment>
      <p>Hello, Hooks {name}: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      didMount: {didMount}
    </React.Fragment>
  );
}

export default Hooks