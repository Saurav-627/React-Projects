import { useState } from "react";


const TodoForm = ({onFormTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
      };

      const handleFormSubmit = (event) => {
      onFormTodo(inputValue);
      event.preventDefault();
      setInputValue("");
      }
  return (
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
  )
}

export default TodoForm
