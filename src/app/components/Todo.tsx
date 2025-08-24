"use client";

import { Task } from "@/types";
import { deleteTodo, editTodo } from "@/api";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);
  const router = useRouter();

  useEffect(() => {
    ref.current?.focus();
  }, [isEditing]);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
    router.refresh(); // ページを更新
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh(); // ページを更新
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            edit
          </button>
        )}
        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
