"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { addTodo, deleteTodo, toggleTodo } from "./store/slice";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const [editText, setEditText] = useState("");

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <div className="flex gap-4">
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo" className="border rounded-lg px-4 py-2 w-64 text-black" />
          <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add
          </button>
        </div>
        <ul className="w-full flex flex-col gap-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-lg">
              <div className="text-black">{todo.text}</div>
              <button onClick={() => dispatch(deleteTodo(todo.id))} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
