"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");

  // ✅ Check if component is rendering
  console.log("TodoList component is rendering");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(" shruthi's tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { id: uuidv4(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-5 w-full max-w-lg bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-600">🚀 To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <Input 
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border border-gray-300 p-2 rounded"
        />
        <Button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </Button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <span 
              className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button onClick={() => deleteTask(task.id)} className="text-red-600">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
