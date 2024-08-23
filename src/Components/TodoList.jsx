import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const TodoList = ({ id, data, onHandleDeleteTodo }) => {
  const [isRead, setMarkAsRead] = useState([]);

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
    <li
      key={id}
      className="flex justify-between m-3 px-4 font-medium bg-slate-100 text-black rounded-full py-2 my-3"
    >
      <span
        style={{
          textDecoration: isRead.includes(id) ? "line-through" : "none",
          fontWeight: isRead.includes(id) ? "bold" : "",
        }}
      >
        {data}
      </span>
      <div className="flex flex-cols gap-8 text-xl text-white">
        <button
          className="radius bg-green-500 p-1"
          onClick={() => handleMarkAsRead(id)}
        >
          <MdCheck />
        </button>
        <button
          className="radius bg-red-600 p-1"
          onClick={() => onHandleDeleteTodo(data)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
