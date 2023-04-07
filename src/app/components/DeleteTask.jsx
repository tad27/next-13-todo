"use client";
import { deleteTask } from "@/data/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Modal from "./Modal";

function DeleteTask({ id }) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    await deleteTask(id);
    setModalOpen(false);
    router.refresh();
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-outline btn-error btn-xs rounded-sm"
      >
        <AiFillDelete size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="flex gap-3 justify-between">
          <h3 className="text-lg">
            Are you sure? you want to delete this task?
          </h3>
          <button
            onClick={handleDelete}
            className="btn btn-error hover:brightness-90"
          >
            Remove Task
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteTask;
