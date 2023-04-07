"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import { addTask } from "@/data/api";
import Modal from "./Modal";

function AddTask() {
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const router = useRouter();
  const inputRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return;
    await addTask({
      id: uuidv4(),
      title: task,
    });
    setTask("");
    setModalOpen(false);
    router.refresh();
  }

  return (
    <div className="my-4 flex flex-row-reverse">
      <button onClick={() => setModalOpen(true)} className="btn btn-primary ">
        Add New Task
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Add a new task</h3>
          <input
            type="text"
            placeholder="write something..."
            className="w-full px-2 py-2 rounded input input-bordered"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ref={inputRef}
          />
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
