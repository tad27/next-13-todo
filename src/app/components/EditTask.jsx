"use client";
import { editTask } from "@/data/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Modal from "./Modal";

function EditTask({ task: oldTask }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState(oldTask.title);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return;
    await editTask({
      id: oldTask.id,
      title: task,
    });

    // setTask("");
    setModalOpen(false);
    router.refresh();
  }
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-outline btn-success btn-xs rounded-sm"
      >
        <AiFillEdit size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Edit Task</h3>
          <input
            type="text"
            placeholder="write something..."
            className="w-full px-2 py-2 rounded input input-bordered"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
      </Modal>
    </>
  );
}

export default EditTask;
