import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
  const initialTodoState = [
    { id: uuidv4(), todo: "give juice a bath", isCompleted: false },
  ];
  const [todoItemList, setTodoItemList] = useState(initialTodoState);
  const [todoItem, settodoItem] = useState("");

  const handleChange = (event) => {
    settodoItem(event.target.value);
  };
  const handleAdd = (data) => {
    if (!todoItem) return;
    let todo_temp = todoItemList.concat({
      id: uuidv4(),
      todo: todoItem,
      completed: false,
    });
    setTodoItemList(todo_temp);
    settodoItem("");
  };
  const handleComplete = (index) => {
    const newList = [...todoItemList];
    newList[index].isCompleted = !newList[index].isCompleted;
    setTodoItemList(newList);
  }

  return (
    <div className="container p-4">
      <h2 className="bg-color-red">To Do List</h2>
      <ul className="list-group">
        {todoItemList.map((todo, index) => (
          <li className="list-group-item pl-4" key={index} style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <input className="form-check-input me-1" 
            type="checkbox" 
            onClick={() => handleComplete(index)}
            />
            {todo.todo}
          </li>
        ))}
      </ul>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a to do"
          aria-describedby="button-addon2"
          onChange={handleChange}
          value={todoItem}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ToDo;
