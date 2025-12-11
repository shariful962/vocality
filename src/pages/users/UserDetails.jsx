import React from "react";
import { RxCross2 } from "react-icons/rx";

const UserDetails = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50 md:ml-[296px] px-4">
      <div className="bg-white  rounded-lg w-[500px]">
        <div className="relative py-4">
          <h2 className="text-xl text-center font-semibold">User Details</h2>
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
                <p className="font-medium">Date:</p>
              </div>
              <div>
                <p className="text-right">{user.date}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Full Name:</p>
              </div>
              <div>
                <p className="text-right">{user.name}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Email:</p>
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
          {/* <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Date of Birth:</p>
              </div>
              <div>
                <p className="text-right">{user.dob}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Gender:</p>
              </div>
              <div>
                <p className="text-right">{user.gender}</p>
              </div>
            </div>
          </div>
          <div className="border-t py-3 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Mobile Number:</p>
              </div>
              <div>
                <p className="text-right">{user.mobile}</p>
              </div>
            </div>
          </div> */}
          <div className="border-t py-4 px-4 border-gray-200">
            <div className="flex flexBetween">
              <div>
                <p className="font-medium">Personality Buy:</p>
              </div>
              <div>
                <p className="text-right">{user.personality}</p>
              </div>
            </div>
          </div>
          
         
        
    
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
