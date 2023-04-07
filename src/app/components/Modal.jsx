import React from "react";

function Modal({ modalOpen, setModalOpen, children }) {
  return (
    <div className={`modal ${modalOpen && "modal-open"} bg-black/75`}>
      <div className="modal-bo relative w-full max-w-xl bg-black border-2 border-gray-900 rounded px-6 py-10">
        <label
          htmlFor="modal"
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
