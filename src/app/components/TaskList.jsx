import React from "react";
import { getAllTasks } from "@/data/api";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

async function TaskList() {
  const tasks = await getAllTasks();
  console.log(tasks);
  return (
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
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td className="w-full">{task.title}</td>
              <td className="">
                <button className="btn btn-outline btn-success btn-xs rounded-sm">
                  <AiFillEdit size={18} />
                </button>
              </td>
              <td className="">
                <button className="btn btn-outline btn-error btn-xs rounded-sm">
                  <AiFillDelete size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
