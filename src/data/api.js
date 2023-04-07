const BASE_URL = "http://localhost:3000";
export const getAllTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  const tasks = await res.json();
  return tasks;
};
