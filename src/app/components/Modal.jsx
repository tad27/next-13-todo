import React from "react";

function Modal({ modalOpen, setModalOpen, children }) {
  console.log(children);
  return (
    <div className={`modal ${modalOpen && "modal-open"}`}>
      <div className="modal-bo relative w-full max-w-xl">
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
