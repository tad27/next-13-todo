const BASE_URL = "http://localhost:3000";

export const getAllTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-store" });
  const tasks = await res.json();
  return tasks;
};

export const addTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const newTask = await response.json();
  return newTask;
};

export const editTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updatedTask = await response.json();
  return updatedTask;
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};
