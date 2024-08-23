import { useEffect, useState } from "react";
import "./todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Help = () => {
  // kehi kura change hudeicha vane always use useState hooks
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const [isRead, setMarkAsRead] = useState([]);

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

  // Todo Date and Time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });
      setDateTime(`Date : ${formattedDate} - Time : ${formattedTime}`);
    }, 1000);

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  //todo handleClearButton function

  const handleClearButton = () => {
    setTask([]);
  };

  //todo handleMarkAsRead function
  const handleMarkAsRead = (index) => {
    // setMarkAsRead(index);
    if (isRead.includes(index)) {
      setMarkAsRead(isRead.filter((curTask) => curTask !== index));
    } else {
      setMarkAsRead([...isRead, index]);
    }
  };

  return (
    <section className="flex flex-col items-center bg-gray-950 font-bold text-gray-50 h-screen">
      <header className="my-7  text-3xl text-center">
        <h1>Todo List</h1>
        <h2 className="text-xl text-center mt-2">{dateTime}</h2>
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
              <li
                key={index}
                className="flex justify-between m-3 px-4 font-medium bg-slate-100 text-black rounded-full py-2 my-3"
              >
                <span
                  style={{
                    textDecoration: isRead.includes(index)
                      ? "line-through"
                      : "none",
                    fontWeight: isRead.includes(index) ? "bold" : "",
                  }}
                >
                  {curTask}
                </span>
                <div className="flex flex-cols gap-8 text-xl text-white">
                  <button
                    className="radius bg-green-500 p-1"
                    onClick={() => handleMarkAsRead(index)}
                  >
                    <MdCheck />
                  </button>
                  <button
                    className="radius bg-red-600 p-1"
                    onClick={() => handleDeleteTodo(curTask)}
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </li>
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

export default Help;
