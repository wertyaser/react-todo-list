import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = React.useState([
    "Write a Journal",
    "Buy Groceries",
    "Read a Book",
  ]);
  const [newTask, setNewTask] = React.useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
    // console.log(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
    }
  }

  function moveTaskDown(index) {}

  return (
    <div className="bg-blue-300 max-w-4xl m-auto">
      <h1 className="text-center text-3xl">Todo List</h1>
      <div className="">
        <input
          className="p-2 border rounded-md w-1/2"
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className="px-4 py-2 border bg-indigo-500 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between p-2">
            {task}
            <div>
              <button
                onClick={() => deleteTask(index)}
                className="px-4 py-2 border bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
              <button
                onClick={() => moveTaskUp(index)}
                className="px-4 py-2 border bg-green-500 text-white rounded-md"
              >
                Up
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="px-4 py-2 border bg-blue-500 text-white rounded-md"
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;
