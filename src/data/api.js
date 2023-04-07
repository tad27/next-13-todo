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
