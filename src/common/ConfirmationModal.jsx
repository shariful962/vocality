import React from "react";
import { RxCross2 } from "react-icons/rx";


const ConfirmationModal = ({ isOpen, onClose, onConfirm, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <div className="absolute top-2 right-3 cursor-pointer" onClick={onClose}> <RxCross2 size={22} /> </div>
        <h1 className="text-center text-[#D93D04] text-xl font-bold">Are you sure !</h1>
        <p className="text-center mt-4">
          Do you want to {user.block ? "unblock" : "block"} {user.name}?
        </p>
        <div className="flex justify-center gap-4 mt-4">
          {/* <button
            className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button> */}
          <button
            className="px-4 py-2 bg-[#D93D04] text-white rounded cursor-pointer"
            onClick={() => onConfirm(user)}
          >
            {/* {user.block ? "Unblock" : "Block"} */}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
