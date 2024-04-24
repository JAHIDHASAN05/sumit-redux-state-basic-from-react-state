import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Stats from './components/Stats'

const initialState = [
  {
    id: 1,
    count: 2
  },
  {
    id: 2,
    count: 5
  }
]
function App() {
  const [count, setCount] = useState(initialState);


  const totalCount = () => {
    return count.reduce((total, counter) => total + counter.count, 0)
  }




  const increament = (id) => {
    const decreamentValue = count[id - 1].count = count[id - 1].count + 1
    const newCounter = count
    newCounter[id - 1].count = decreamentValue

    console.log(count, 'dec');
    setCount([...newCounter])
  }
  const decreament = (id) => {
    const decreamentValue = count[id - 1].count = count[id - 1].count - 1
    const newCounter = count
    newCounter[id - 1].count = decreamentValue

    console.log(newCounter, 'dec', [...newCounter]);
    setCount([...newCounter])
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          count.map(c =>
            <Counter key={c.id} id={c.id} count={c.count} increament={increament} decreament={decreament} />
          )
        }

        <Stats count={totalCount()} />
      </div>
    </div>
  )
}

export default App
