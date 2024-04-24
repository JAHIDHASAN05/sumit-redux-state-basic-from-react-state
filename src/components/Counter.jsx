

export default function Counter({id ,count,increament,decreament}) {
 
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
      {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increament"
          onClick={()=>increament(id)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decreament"
          onClick={()=>decreament(id)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
