import React from "react";
import { getAllTasks } from "@/data/api";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

async function TaskList() {
  const tasks = await getAllTasks();

  return tasks.length === 0 ? (
    <div>There is no todo!</div>
  ) : (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td className="w-full">{task.title}</td>
              <td className="">
                <EditTask task={task} />
              </td>
              <td className="">
                <DeleteTask id={task.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
