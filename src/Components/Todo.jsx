import { useState } from "react";
import "./todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DateTime from "./DateTime";

const Todo = () => {
  // kehi kura change hudeicha vane always use useState hooks

  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    //Validation for double entry and blank
    if (!inputValue) return;
    //  ... is spread operator
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  //todo handleClearButton function

  const handleClearButton = () => {
    setTask([]);
  };

  return (
    <section className="flex flex-col items-center bg-gray-950 font-bold text-gray-50 h-screen">
      <header className="my-7  text-3xl text-center">
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <TodoForm onFormTodo={handleFormSubmit} />

      <section className="w-96 h-12 my-8">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                taskId = {index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
        <section className="flex justify-center">
          <button
            className="bg-red-600 p-2 rounded-2xl"
            onClick={handleClearButton}
          >
            Clear all
          </button>
        </section>
      </section>
    </section>
  );
};

export default Todo;
