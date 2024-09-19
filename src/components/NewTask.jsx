import React, { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enterdTask, setEnterdTask] = useState("");

  function handleChange(event) {
    setEnterdTask(event.target.value);
  }
  function handleClick() {
    if (enterdTask.trim() === "") {
      return;
    }
    onAddTask(enterdTask);
    setEnterdTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enterdTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-600 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
