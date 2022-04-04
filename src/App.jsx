import { useState , useEffect } from 'react'
import { Nike } from "./../nike/nike"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nike />
    </div>
  )
}

export default App
