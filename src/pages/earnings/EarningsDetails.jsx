import React from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

const EariningsDetails = ({ user, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50   px-4">
      <div className="bg-white  rounded-lg w-[500px]">
        <div className="relative py-4">
          <h2 className="text-xl text-center font-semibold">Transactions Details</h2>
          <button
            onClick={onClose}
            className="absolute top-4.5 right-4 text-xl font-semibold cursor-pointer"
          >
            {" "}
            <RxCross2 size={24} />{" "}
          </button>
        </div>
        <div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Name :</p>
              </div>
              <div>
                <p className="text-right">{user.name}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Transaction ID : </p>
              </div>
              <div>
                <p className="text-right">{user.transactionId}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Email :</p>
              </div>
              <div>
                <p className="text-right">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Time:</p>
              </div>
              <div>
                <p className="text-right">{user.time}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Date :</p>
              </div>
              <div>
                <p className="text-right">{user.date}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">A/C number : </p>
              </div>
              <div>
                <p className="text-right">**** **** **** {user.account_number.slice(-4)}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Transaction amount : </p>
              </div>
              <div>
                <p className="text-right">${user.amount}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Earning Category : </p>
              </div>
              <div>
                <p className="text-right">{user.type}</p>
              </div>
            </div>
          </div>
          
         
        
    
        </div>
      </div>
    </div>,
      document.body
  );
};

export default EariningsDetails;