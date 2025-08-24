import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/tasks", { cache: "no-store" }); //SSR
  const todos = await res.json(); // awaitを追加

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json(); // awaitを追加

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = await res.json(); // awaitを追加

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = await res.json(); // awaitを追加

  return deleteTodo;
};
