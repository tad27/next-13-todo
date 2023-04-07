import React from "react";
import { getAllTasks } from "@/data/api";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
