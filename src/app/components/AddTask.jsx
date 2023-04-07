"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

function AddTask() {
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTask("");
    setModalOpen(false);
  }

  return (
    <div className="my-4">
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
            className="w-full px-2 py-2 rounded"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
