
import React, { useEffect, useState } from 'react'


function Counter() {
  const [counter, setCounter] = useState(0);

useEffect(() => {
  setInterval(function () {setCounter(counter + 1)}, 1000);

}, []);

  return (
    <div>
      <h3>{counter}</h3>
    </div>
  )
  }

export default Counter
