import { useState } from "react";
import "./todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //Validation for double entry and blank
    if (!inputValue) return;

    //  ... is spread operator
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  return (
    <section className="flex flex-col items-center bg-gray-950 font-bold text-gray-50 h-screen">
      <header className="my-7  text-3xl">
        <h1>Todo List</h1>
      </header>
      <section className="">
        <form className="flex" onSubmit={handleFormSubmit}>
          <div className="text-xl">
            <input
              type="text"
              className="Offset rounded-bl-2xl rounded-tl-2xl border-none text-gray-950 px-2 h-11 w-64 font-normal"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div className="relative bg-cyan-600 rounded-br-2xl rounded-tr-2xl px-3 text-xl font-bold  z-10 flex items-center">
            <button type="submit" className="">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="w-96 h-12 my-8">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="flex justify-between m-3 px-4 font-medium bg-slate-100 text-black rounded-full py-2 my-3">
                <span>{curTask}</span>
                <div className="flex flex-cols gap-8 text-xl text-white">
                  <button className="radius bg-green-500 p-1">
                    <MdCheck />
                  </button>
                  <button className="radius bg-red-600 p-1">
                    <MdDeleteForever />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
