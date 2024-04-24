import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increament=()=>{
    setCount((prevCount)=> prevCount +1)
  }
  const decreament=()=>{
    setCount((prevCount)=> prevCount -1)
  }
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
      {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increament"
          onClick={increament}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decreament"
          onClick={decreament}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
